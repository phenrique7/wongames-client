type LinkedinIconProps = {
  color?: string;
};

export function LinkedinIcon(props: LinkedinIconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 1H5C2.92925 1 1 2.92925 1 5V15C1 17.0707 2.92925 19 5 19H15C17.0715 19 19 17.0707 19 15V5C19 2.92925 17.0715 1 15 1ZM7 15.25H4.75V7H7V15.25ZM5.875 6.049C5.1505 6.049 4.5625 5.4565 4.5625 4.726C4.5625 3.9955 5.1505 3.403 5.875 3.403C6.5995 3.403 7.1875 3.9955 7.1875 4.726C7.1875 5.4565 6.60025 6.049 5.875 6.049ZM16 15.25H13.75V11.047C13.75 8.521 10.75 8.71225 10.75 11.047V15.25H8.5V7H10.75V8.32375C11.797 6.38425 16 6.241 16 10.1808V15.25Z"
        fill={props.color ?? "currentColor"}
      ></path>
    </svg>
  );
}
