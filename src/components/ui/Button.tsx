'use client';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white p-2 rounded hover:bg-secondary"
    >
      {children}
    </button>
  );
};

export default Button;
