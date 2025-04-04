type LockIconProps = {
  color?: string;
};

export function LockIcon(props: LockIconProps) {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7.5H14C15.1 7.5 16 8.4 16 9.5V19.5C16 20.6 15.1 21.5 14 21.5H2C0.9 21.5 0 20.6 0 19.5V9.5C0 8.4 0.9 7.5 2 7.5H3V5.5C3 2.74 5.24 0.5 8 0.5C10.76 0.5 13 2.74 13 5.5V7.5ZM8 2.5C6.34 2.5 5 3.84 5 5.5V7.5H11V5.5C11 3.84 9.66 2.5 8 2.5ZM2 19.5V9.5H14V19.5H2ZM10 14.5C10 15.6 9.1 16.5 8 16.5C6.9 16.5 6 15.6 6 14.5C6 13.4 6.9 12.5 8 12.5C9.1 12.5 10 13.4 10 14.5Z"
        fill={props.color ?? "currentColor"}
      ></path>
    </svg>
  );
}
