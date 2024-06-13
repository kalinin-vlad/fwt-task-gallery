import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./DarkModeToggle.module.scss";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className={styles.toggle}>
      <img
        src={isDarkMode ? "darkMode-icon.svg" : `lightMode-icon.svg`}
        alt="lightMode"
      />
    </button>
  );
}

export default DarkModeToggle;
