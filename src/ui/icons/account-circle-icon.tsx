type AccountCircleIconProps = {
  color?: string;
};

export function AccountCircleIcon(props: AccountCircleIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM10 12.5C11.46 12.5 14.93 13.09 16.36 14.83C17.38 13.49 18 11.82 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10C2 11.82 2.62 13.49 3.64 14.83C5.07 13.09 8.54 12.5 10 12.5ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM8.5 7.5C8.5 8.33 9.17 9 10 9C10.83 9 11.5 8.33 11.5 7.5C11.5 6.67 10.83 6 10 6C9.17 6 8.5 6.67 8.5 7.5Z"
        fill={props.color ?? "currentColor"}
      ></path>
    </svg>
  );
}
