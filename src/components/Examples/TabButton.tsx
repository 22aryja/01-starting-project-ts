type TabButtonProps = {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
};

export default function TabButton({
  label,
  isSelected,
  ...props
}: TabButtonProps) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {label}
      </button>
    </li>
  );
}
