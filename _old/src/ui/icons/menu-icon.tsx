type MenuIconProps = {
  color?: string;
};

export function MenuIcon(props: MenuIconProps) {
  return (
    <svg viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1H24"
        stroke={props.color ?? "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M1 8H14.8868"
        stroke={props.color ?? "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M1 15H21.8302"
        stroke={props.color ?? "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
