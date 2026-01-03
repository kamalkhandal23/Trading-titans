const API_URL = "http://localhost:5000/api";

export const api = {
  getBlogs: () =>
    fetch(`${API_URL}/blogs`).then(res => res.json()),

  addBlog: (data: any) =>
    fetch(`${API_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json()),

  deleteBlog: (id: string) =>
    fetch(`${API_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),

  getVideos: () =>
    fetch(`${API_URL}/videos`).then(res => res.json()),

  addVideo: (data: any) =>
    fetch(`${API_URL}/videos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json()),
};
