export const IconCheck: React.FC<{
  color?: string;
  strokeWidth?: string;
}> = ({ color, strokeWidth }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g
        fill="none"
        stroke={color ?? "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth ?? "1px"}
        transform="matrix(1,0,0,1,0,0)"
      >
        <path d="M23.25.749,8.158,22.308a2.2,2.2,0,0,1-3.569.059L.75,17.249" />
      </g>
    </svg>
  );
};