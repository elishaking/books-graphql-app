import React from "react";
import "./button.scss";

interface TProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ children, onClick }: TProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
