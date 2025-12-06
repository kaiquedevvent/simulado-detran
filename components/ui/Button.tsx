import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#6B4F3A] text-white hover:bg-[#5A4230] shadow-md border-b-4 border-[#4A3627]",
    secondary: "bg-green-600 text-white hover:bg-green-700 shadow-md border-b-4 border-green-800",
    outline: "border-2 border-[#6B4F3A] text-[#6B4F3A] hover:bg-[#6B4F3A] hover:text-white",
    ghost: "text-[#5D4E43] hover:text-[#3E2C20] hover:bg-[#E8E0D5]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};