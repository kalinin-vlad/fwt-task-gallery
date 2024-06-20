import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Header from "../../ui/Header/Header";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <div className={styles.container}>
        <Header.Container className={styles.headerContainer}>
          <Header />
        </Header.Container>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
