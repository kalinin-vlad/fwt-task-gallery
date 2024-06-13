import styles from "./Empty.module.scss";

interface EmptyProps {
  resourceName: string;
}

function Empty({ resourceName }: EmptyProps) {
  return (
    <div className={styles.emptyContainer}>
      <p className={styles.noMatchesMessage}>
        No matches for <span>{resourceName}</span>
      </p>
      <p className={styles.suggestionMessage}>
        {" "}
        Please try again with a different spelling or keywords.
      </p>
    </div>
  );
}

export default Empty;
