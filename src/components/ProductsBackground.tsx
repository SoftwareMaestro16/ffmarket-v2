export const ProductsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full filter blur-[120px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-full filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-yellow-600/20 to-red-600/20 rounded-full filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.2)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-500/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-orange-500/20 rotate-45 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 border-2 border-yellow-500/20 rounded-full animate-float animation-delay-4000"></div>
      
      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform -rotate-12"></div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
    </div>
  );
};
