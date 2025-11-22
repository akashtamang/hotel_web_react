import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Simple password - change this to your desired password
  const ADMIN_PASSWORD = "admin123"; // TODO: Change this to a secure password

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem("adminToken", "authenticated");
        onLoginSuccess();
        navigate("/admin/gallery");
      } else {
        setError("Invalid password. Please try again.");
        setPassword("");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-gray-600 mt-2">Enter password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              disabled={loading}
              autoFocus
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          🔒 This is a protected admin area
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
