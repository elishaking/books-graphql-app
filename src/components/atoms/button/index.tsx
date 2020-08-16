import React from "react";
import "./button.scss";

interface TProps {
  children: React.ReactNode;
}

export const Button = ({ children }: TProps) => {
  return <button className="btn">{children}</button>;
};
