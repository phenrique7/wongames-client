type AddShoppingCartIconProps = {
  color?: string;
};

export function AddShoppingCartIcon(props: AddShoppingCartIconProps) {
  const { color = 'white' } = props;

  return (
    <svg fill="none" color={color} viewBox="0 0 19 19">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.18 7.313H9.43V4.688H6.805v-1.75H9.43V.312h1.75v2.626h2.625v1.75H11.18v2.625Zm-6.991 9.625c0-.963.778-1.75 1.74-1.75.963 0 1.75.787 1.75 1.75 0 .962-.787 1.75-1.75 1.75a1.748 1.748 0 0 1-1.74-1.75Zm10.49-1.75c-.962 0-1.74.787-1.74 1.75 0 .962.778 1.75 1.74 1.75.963 0 1.75-.788 1.75-1.75 0-.963-.787-1.75-1.75-1.75Zm-1.268-4.376H6.892l-.962 1.75h10.5v1.75H5.93c-1.33 0-2.17-1.426-1.531-2.598l1.18-2.135-3.15-6.642H.68v-1.75h2.862L7.27 9.063h6.142l3.386-6.124 1.523.84-3.378 6.133a1.742 1.742 0 0 1-1.53.902Z"
        fill="currentColor"
      />
    </svg>
  );
}
