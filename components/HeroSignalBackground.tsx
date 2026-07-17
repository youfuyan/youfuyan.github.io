const signalPoints = [
  { label: "DESIGN", x: 960, y: 290 },
  { label: "EVALUATE", x: 1090, y: 230 },
  { label: "ROLLOUT", x: 1225, y: 265 },
  { label: "OPERATE", x: 1370, y: 165 },
] as const;

export function HeroSignalBackground() {
  return (
    <div
      className="hero-signal-layer pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="hero-signal-background h-full w-full"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hero-signal-grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path d="M72 0H0V72" fill="none" stroke="currentColor" />
          </pattern>
        </defs>

        <rect
          className="hero-signal-grid"
          width="100%"
          height="100%"
          fill="url(#hero-signal-grid)"
        />

        <g className="hero-signal-stars">
          <circle cx="110" cy="90" r="1.5" />
          <circle cx="420" cy="165" r="1" />
          <circle cx="710" cy="95" r="1.5" />
          <circle cx="820" cy="420" r="1" />
          <circle cx="1080" cy="85" r="1" />
          <circle cx="1360" cy="390" r="1.5" />
        </g>

        <g className="hero-signal-trace">
          <text x="960" y="125" className="hero-signal-caption">
            SYSTEM DELIVERY TRACE
          </text>
          <path
            className="hero-signal-path-base"
            d="M910 330 C925 328 940 310 960 290 C1005 250 1040 230 1090 230 C1145 230 1170 315 1225 265 C1280 220 1335 215 1370 165"
            pathLength="1"
          />
          <path
            className="hero-signal-path-flow"
            d="M910 330 C925 328 940 310 960 290 C1005 250 1040 230 1090 230 C1145 230 1170 315 1225 265 C1280 220 1335 215 1370 165"
          />
          {signalPoints.map((point, index) => (
            <g key={point.label} className={`hero-signal-point hero-signal-point-${index + 1}`}>
              <circle cx={point.x} cy={point.y} r="5" />
              <circle cx={point.x} cy={point.y} r="14" className="hero-signal-ring" />
              <text x={point.x + 12} y={point.y - 14} className="hero-signal-label">
                {point.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
