import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Header from "../../ui/Header/Header";
import SearchField from "../../ui/SearchField/SearchField";

export default function AppLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.appLayout}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.searchFieldContainer}>
          <SearchField />
        </div>
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
