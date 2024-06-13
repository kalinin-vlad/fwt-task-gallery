import React from "react";
import styles from "./ButtonIcon.module.scss";

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function ButtonIcon({
  icon,
  type = "button",
  onClick,
  className,
}: ButtonIconProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.buttonIcon} ${className}`}
    >
      {icon}
    </button>
  );
}
