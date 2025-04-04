type SentIconProps = {
  color?: string;
};

export function SentIcon(props: SentIconProps) {
  const { color = "white" } = props;

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g
        style={{
          opacity: 1,
          fill: "none",
          stroke: "none",
          strokeWidth: 0,
          fillRule: "nonzero",
          strokeMiterlimit: 10,
          strokeLinecap: "butt",
          strokeDasharray: "none",
          strokeLinejoin: "miter",
        }}
      >
        <path
          d="M82.127 71.258H26.728c-4.341 0-7.873-3.532-7.873-7.873v-10.16a1.5 1.5 0 1 1 3 0v10.16a4.878 4.878 0 0 0 4.873 4.873h55.399A4.88 4.88 0 0 0 87 63.385v-36.77a4.88 4.88 0 0 0-4.873-4.873H26.728a4.878 4.878 0 0 0-4.873 4.873v10.038a1.5 1.5 0 1 1-3 0V26.615c0-4.341 3.532-7.873 7.873-7.873h55.399c4.341 0 7.873 3.532 7.873 7.873v36.77c0 4.341-3.532 7.873-7.873 7.873z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: color ?? "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          d="m63.732 45 16.726-15.344a1.5 1.5 0 0 0-2.027-2.211L54.427 49.466 30.425 27.445a1.501 1.501 0 0 0-2.029 2.211L45.122 45 28.396 60.345a1.5 1.5 0 1 0 2.029 2.21l16.916-15.52 6.072 5.571a1.495 1.495 0 0 0 2.028 0l6.073-5.571 16.917 15.52a1.496 1.496 0 0 0 2.119-.091 1.5 1.5 0 0 0-.092-2.119L63.732 45zM25.423 46.5H7.539a1.5 1.5 0 1 1 0-3h17.885a1.5 1.5 0 1 1-.001 3zM12.497 36.016H1.5a1.5 1.5 0 1 1 0-3h10.997a1.5 1.5 0 1 1 0 3zM12.497 56.984H4.394a1.5 1.5 0 1 1 0-3h8.104a1.5 1.5 0 1 1-.001 3z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: color ?? "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
      </g>
    </svg>
  );
}
