import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-white hover:opacity-90 transition">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 shadow">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold">Twak</span>
        </Link>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/settings"
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full text-red-300 bg-red-900/40 hover:bg-red-800/60 backdrop-blur-md transition"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
