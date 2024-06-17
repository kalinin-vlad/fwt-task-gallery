import { useState } from "react";
import { PaintingProps } from "../../types/index";
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
        src={`${import.meta.env.VITE_API_BASE_URL}${imageUrl}`}
        alt={name}
        onLoad={handleImageLoad}
        loading="lazy"
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
