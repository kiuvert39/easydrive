import React from 'react';
import '../../App.css'; // Tailwind-based styles with @apply

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    }

const NavButton: React.FC<ButtonProps> = ({ text, onClick, type = 'button', variant = 'primary' }) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-base ${variantClass}`}
    >
      {text}
    </button>
  );
};

export default NavButton;
