import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}


 
const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition-all focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};


  
export default Button;