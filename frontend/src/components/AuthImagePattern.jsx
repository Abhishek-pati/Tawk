const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white overflow-hidden">
      {/* Decorative Pattern Layer */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 px-10 text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4 drop-shadow-md">{title}</h2>
        <p className="text-base text-white/80">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
