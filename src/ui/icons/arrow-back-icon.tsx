type ArrowBackIconProps = {
  color?: string;
};

export function ArrowBackIcon(props: ArrowBackIconProps) {
  return (
    <svg fill="none" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.835 1.86998L10.055 0.0999756L0.165039 9.99998L10.065 19.9L11.835 18.13L3.70504 9.99998L11.835 1.86998Z"
        fill={props.color ?? "currentColor"}
      ></path>
    </svg>
  );
}
