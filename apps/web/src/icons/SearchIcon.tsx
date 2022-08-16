type SearchIconProps = {
  color?: string;
};

export function SearchIcon(props: SearchIconProps) {
  const { color = 'white' } = props;

  return (
    <svg fill="none" color={color} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.965 14.255h.79l4.99 5-1.49 1.49-5-4.99v-.79l-.27-.28a6.471 6.471 0 0 1-4.23 1.57 6.5 6.5 0 1 1 6.5-6.5c0 1.61-.59 3.09-1.57 4.23l.28.27Zm-9.71-4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
