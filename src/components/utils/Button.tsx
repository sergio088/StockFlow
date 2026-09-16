interface Buttonprops {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}

export default function Button({ onClick, children, className }: Buttonprops) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
