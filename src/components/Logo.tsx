
const Logo = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      {/* Logo Icon */}
      <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-2 sm:p-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <span className="text-white font-bold text-base sm:text-lg">R</span>
        </div>
      </div>
      {/* Logo Text */}
      <div className="text-lg sm:text-xl font-bold">
        <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Rumi
        </span>
        <span className="text-gray-900">Solutions</span>
      </div>
    </div>
  );
};

export default Logo;