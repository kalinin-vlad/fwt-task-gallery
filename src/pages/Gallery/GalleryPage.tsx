import styles from "./GalleryPage.module.scss";
import Gallery from "../../features/Gallery/Gallery";

export default function GalleryPage() {
  return (
    <div className={styles.galleryPage}>
      <Gallery />
    </div>
  );
}
