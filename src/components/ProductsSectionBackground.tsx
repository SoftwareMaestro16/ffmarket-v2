export const ProductsSectionBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full filter blur-[150px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-full filter blur-[150px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-yellow-600/20 to-red-600/20 rounded-full filter blur-[150px] animate-blob animation-delay-4000"></div>

      {/* Radial rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]"></div>
      </div>

      {/* Diagonal gradient lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -rotate-12 origin-left"></div>
        <div className="absolute top-1/4 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent transform rotate-12 origin-left"></div>
        <div className="absolute top-2/4 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transform -rotate-12 origin-left"></div>
        <div className="absolute top-3/4 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent transform rotate-12 origin-left"></div>
      </div>

      {/* Grid pattern with glow */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="home-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#grid-gradient)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#home-grid)"/>
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `linear-gradient(135deg, ${
              i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#eab308'
            }, transparent)`,
            animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: Math.random() * 5 + 's',
            opacity: 0.3,
          }}
        />
      ))}

      {/* Spotlight effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-600/10 via-transparent to-transparent rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-orange-600/10 via-transparent to-transparent rounded-full"></div>
      </div>

      {/* Animated border lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="rgba(239,68,68,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80"></div>
    </div>
  );
};
