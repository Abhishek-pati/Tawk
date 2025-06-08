import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Left - Form Section */}
      <div className="flex flex-col justify-center items-center px-6 sm:px-12">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8 border border-white/10">
          {/* Logo & Heading */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl shadow">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-sm text-white/70">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/40 text-white placeholder:text-white/40"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/40 text-white placeholder:text-white/40"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-purple-500 to-blue-500 hover:opacity-90 transition text-white py-2.5 rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-50"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center text-sm text-white/70">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>

      {/* Right - Illustration Section */}
      <AuthImagePattern
        title="We're Glad You're Here"
        subtitle="Start chatting, sharing, and exploring your community."
      />
    </div>
  );
};

export default LoginPage;
