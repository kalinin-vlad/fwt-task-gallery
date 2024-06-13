import { useState } from "react";
import { PaintingProps } from "../../utils/types";
import styles from "./Painting.module.scss";

export default function Painting({ painting }: PaintingProps) {
  const { created, name, imageUrl, locationName, authorName } = painting;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.painting}>
      {!imageLoaded && <div className={styles.placeholder}>Loading...</div>}
      <img
        src={`https://test-front.framework.team/${imageUrl}`}
        alt={name}
        className={`${!imageLoaded && styles.blur}`}
        onLoad={handleImageLoad}
      />
      <div className={styles.info}>
        <div className={styles.visible}>
          <h2>{name}</h2>
          <p>{created}</p>
        </div>
        <div className={styles.invisible}>
          <h2>{authorName}</h2>
          <p>{locationName}</p>
        </div>
      </div>
    </div>
  );
}
