import styles from "./Logo.module.scss";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={styles.logo}>
      <img
        src={isDarkMode ? "logo-darkMode.svg" : "logo-light.svg"}
        alt="Logo FWT"
      />
    </div>
  );
}
