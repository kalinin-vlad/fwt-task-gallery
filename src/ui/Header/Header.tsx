import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../../components/Logo/Logo";
import styles from "./Header.module.scss";
import { ReactNode } from "react";

interface ContainerProps {
  className: string;
  children: ReactNode;
}

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <DarkModeToggle />
    </header>
  );
}

Header.Container = function Container({ className, children }: ContainerProps) {
  return <div className={className}>{children}</div>;
};
