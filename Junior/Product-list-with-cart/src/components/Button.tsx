import "../styles/components/_button.scss";

export default function Button({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
