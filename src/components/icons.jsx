// Simple React logo mark for tech tile
export function ReactLogoIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#34d399" strokeWidth="10">
        <ellipse cx="128" cy="128" rx="80" ry="30" />
        <ellipse cx="128" cy="128" rx="80" ry="30" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="80" ry="30" transform="rotate(-60 128 128)" />
      </g>
      <circle cx="128" cy="128" r="12" fill="#34d399" />
    </svg>
  );
}
