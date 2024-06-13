import { useMoveBack } from "../../hooks/useMoveBack";
import styles from "./PageNotFound.module.scss";

export default function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className={styles.pageNotFound}>
      <div className={styles.box}>
        <h1>The page you are looking for could not be found 😢</h1>
        <button onClick={moveBack}>&larr; Go back</button>
      </div>
    </main>
  );
}
