type MailIconProps = {
  color?: string;
};

export function MailIcon(props: MailIconProps) {
  const { color = "white" } = props;

  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM10 9L2 4V14H18V4L10 9Z"
        fill={color ?? "currentColor"}
      ></path>
    </svg>
  );
}
