import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = localStorage.getItem("role") === "admin";
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-600 font-medium"
      : "text-slate-600 hover:text-blue-600";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          Trading Titans
        </Link>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          <Link to="/videos" className={isActive("/videos")}>
            Videos
          </Link>

          <Link to="/blog" className={isActive("/blog")}>
            Blog
          </Link>

          <Link to="/about" className={isActive("/about")}>
            About
          </Link>

          {/* 🔐 ADMIN LOGIN / LOGOUT */}
          {!token ? (
            <Link
              to="/admin"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Admin Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
