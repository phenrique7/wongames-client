type FilledAlertIconProps = {
  color?: string;
};

export function FilledAlertIcon(props: FilledAlertIconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 15V13H11V15H9ZM9 5V11H11V5H9Z"
        fill={props.color ?? "currentColor"}
      ></path>
    </svg>
  );
}
