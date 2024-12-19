const GradientSvg = ({
  id,
  colorFrom,
  colorTo,
}: {
  id: string;
  colorFrom: string;
  colorTo: string;
}) => (
  <svg width="0" height="0" style={{ position: "absolute" }}>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: colorFrom, stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: colorTo, stopOpacity: 1 }} />
    </linearGradient>
  </svg>
);

export default GradientSvg;
