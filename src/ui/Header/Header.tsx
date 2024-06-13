import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../../components/Logo/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <DarkModeToggle />
    </header>
  );
}
