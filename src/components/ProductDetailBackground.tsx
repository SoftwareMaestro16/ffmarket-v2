export const ProductDetailBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-600/30 to-orange-600/30 rounded-full filter blur-[150px] animate-blob"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-orange-600/30 to-yellow-600/30 rounded-full filter blur-[150px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-yellow-600/30 to-red-600/30 rounded-full filter blur-[150px] animate-blob animation-delay-4000"></div>

      {/* Radial burst lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-red-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 border-2 border-orange-500/30 rounded-full animate-ping animation-delay-2000" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 border-2 border-yellow-500/30 rounded-full animate-ping animation-delay-4000" style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Diagonal light beams */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-500 to-transparent transform -skew-y-12"></div>
        <div className="absolute top-1/3 right-0 w-full h-32 bg-gradient-to-b from-orange-500 to-transparent transform skew-y-12"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow-500 to-transparent transform -skew-y-12"></div>
      </div>

      {/* Floating particles with glow */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 3 + 'px',
            height: Math.random() * 6 + 3 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#eab308'
            }, transparent)`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px ${
              i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#f97316' : '#eab308'
            }`,
            animation: `float ${Math.random() * 20 + 15}s linear infinite`,
            animationDelay: Math.random() * 5 + 's',
            opacity: 0.4,
          }}
        />
      ))}

      {/* Grid with perspective */}
      <div className="absolute inset-0 opacity-5" style={{ perspective: '1000px' }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="detail-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#detail-gradient)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="detail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#detail-grid)" transform="rotateX(60deg)"/>
        </svg>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="detail-hexagons" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="30,26 45,34.6 45,51.9 30,60.5 15,51.9 15,34.6" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#detail-hexagons)"/>
        </svg>
      </div>

      {/* Spotlight effects with animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-red-600/15 via-transparent to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-orange-600/15 via-transparent to-transparent rounded-full animate-pulse animation-delay-2000" style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse animation-delay-2000"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent animate-pulse animation-delay-4000"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent animate-pulse"></div>
      </div>

      {/* Rotating gradient rings */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border-4 border-transparent border-t-red-500 rounded-full animate-spin" style={{ transform: 'translate(-50%, -50%)', animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border-4 border-transparent border-r-orange-500 rounded-full animate-spin" style={{ transform: 'translate(-50%, -50%)', animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-transparent border-b-yellow-500 rounded-full animate-spin" style={{ transform: 'translate(-50%, -50%)', animationDuration: '25s' }}></div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black/90"></div>
    </div>
  );
};
