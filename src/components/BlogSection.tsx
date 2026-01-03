// BlogSection.tsx
import { useEffect, useState } from "react";
import { Plus, BookOpen } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { AddBlogModal } from "./AddBlogModal";

export interface BlogPost {
  id: string;
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: "Market Analysis" | "Trading Tips" | "Investment Guide" | "News";
  image: string;
  readTime: string;
}

const API_URL = "http://localhost:5001/api";

export function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const isAdmin = localStorage.getItem("role") === "admin";
  const token = localStorage.getItem("token");

  const categories = ["All", "Market Analysis", "Trading Tips", "Investment Guide", "News"];

  useEffect(() => {
    fetch(`${API_URL}/blogs`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((b: any) => ({
          ...b,
          id: b._id,
          date: new Date(b.createdAt).toISOString().split("T")[0],
        }));
        setBlogs(formatted);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(b => b.category === selectedCategory);

  const handleAddOrUpdateBlog = async (blog: Omit<BlogPost, "id">) => {
    if (!token) return;

    const url = editingBlog
      ? `${API_URL}/blogs/${editingBlog.id}`
      : `${API_URL}/blogs`;

    const method = editingBlog ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(blog),
    });

    const saved = await res.json();

    const formatted = {
      ...saved,
      id: saved._id,
      date: new Date(saved.createdAt).toISOString().split("T")[0],
    };

    setBlogs(prev =>
      editingBlog
        ? prev.map(b => (b.id === formatted.id ? formatted : b))
        : [formatted, ...prev]
    );

    setEditingBlog(null);
    setIsModalOpen(false);
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Delete blog?") || !token) return;

    await fetch(`${API_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2>Financial Education Blog</h2>
            <p className="text-slate-600">Expert insights on the stock market</p>
          </div>

          {isAdmin && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex gap-2"
            >
              <Plus /> New Post
            </button>
          )}
        </div>

        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">Loading blogs…</div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg">
            <BookOpen className="mx-auto mb-4" />
            No blog posts yet
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredBlogs.map(blog => (
              <BlogCard
                key={blog.id}
                blog={blog}
                isAdmin={isAdmin}
                onEdit={setEditingBlog}
                onDelete={handleDeleteBlog}
              />
            ))}
          </div>
        )}
      </div>

      {isAdmin && (
        <AddBlogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddBlog={handleAddOrUpdateBlog}
        />
      )}
    </section>
  );
}
