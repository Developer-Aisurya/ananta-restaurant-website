export function ArchFrame({ className = "", stroke = "#C79A4B" }) {
  return (
    <svg
      viewBox="0 0 400 560"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M8 556V180C8 88 96 8 200 8C304 8 392 88 392 180V556"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M32 556V186C32 104 108 34 200 34C292 34 368 104 368 186V556"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

export function MandalaMotif({ className = "", stroke = "#C79A4B" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1">
        <circle cx="100" cy="100" r="94" opacity="0.5" />
        <circle cx="100" cy="100" r="70" opacity="0.6" />
        <circle cx="100" cy="100" r="46" opacity="0.7" />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const x1 = 100 + Math.cos(angle) * 46;
          const y1 = 100 + Math.sin(angle) * 46;
          const x2 = 100 + Math.cos(angle) * 94;
          const y2 = 100 + Math.sin(angle) * 94;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.35" />;
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const cx = 100 + Math.cos(angle) * 70;
          const cy = 100 + Math.sin(angle) * 70;
          return <circle key={i} cx={cx} cy={cy} r="8" />;
        })}
      </g>
    </svg>
  );
}

export function PaisleyMotif({ className = "", fill = "#C79A4B" }) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <path
        d="M64 8C88 8 96 34 84 56C74 74 50 78 46 96C42 114 60 126 78 120C60 138 26 134 16 112C6 90 22 74 32 58C44 38 40 8 64 8Z"
        fill={fill}
        opacity="0.9"
      />
    </svg>
  );
}

export function BorderRule({ className = "" }) {
  return (
    <svg viewBox="0 0 600 20" className={className} aria-hidden="true" preserveAspectRatio="none">
      <line x1="0" y1="10" x2="600" y2="10" stroke="#C79A4B" strokeWidth="1" />
      {Array.from({ length: 30 }).map((_, i) => (
        <circle key={i} cx={10 + i * 20} cy="10" r="2" fill="#C79A4B" />
      ))}
    </svg>
  );
}

export function CornerOrnament({ className = "", stroke = "#C79A4B" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="none" stroke={stroke} strokeWidth="1.2">
        <path d="M4 60C4 28 28 4 60 4" opacity="0.9" />
        <path d="M4 40C4 20 20 4 40 4" opacity="0.6" />
        <circle cx="4" cy="4" r="4" fill={stroke} stroke="none" />
      </g>
    </svg>
  );
}

export function DiyaFlame({ className = "" }) {
  return (
    <svg viewBox="0 0 60 80" className={className} aria-hidden="true">
      <path
        d="M30 4C36 20 44 26 44 40C44 51 38 58 30 58C22 58 16 51 16 40C16 26 24 20 30 4Z"
        fill="#E08A2B"
      />
      <path
        d="M30 20C33 30 37 33 37 41C37 47 34 51 30 51C26 51 23 47 23 41C23 33 27 30 30 20Z"
        fill="#F6EFE4"
        opacity="0.85"
      />
      <ellipse cx="30" cy="66" rx="20" ry="6" fill="#8B4A34" />
      <ellipse cx="30" cy="63" rx="16" ry="4.5" fill="#B5502F" />
    </svg>
  );
}
