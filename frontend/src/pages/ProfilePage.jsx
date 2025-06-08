import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Profile</h1>
          <p className="mt-2 text-sm text-gray-300">Your profile information</p>
        </div>

        {/* Avatar Upload */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-0 right-0 bg-gradient-to-tr from-blue-500 to-purple-600 hover:scale-105 p-2 rounded-full cursor-pointer transition-transform ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-5 h-5 text-white" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-gray-400">
            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
          </p>
        </div>

        {/* User Info */}
        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-300 flex items-center gap-2 mb-1">
              <User className="w-4 h-4" />
              Full Name
            </div>
            <p className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white">
              {authUser?.fullName}
            </p>
          </div>

          <div>
            <div className="text-sm text-gray-300 flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4" />
              Email Address
            </div>
            <p className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white">
              {authUser?.email}
            </p>
          </div>
        </div>

        {/* Account Info Section */}
        <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Account Information</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <span>Member Since</span>
              <span>{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Account Status</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
