import { useGallery } from "../../features/Gallery/useGallery";
import GalleryList from "../../features/Gallery/GalleryList";
import SearchField from "../../ui/SearchField/SearchField";
import Pagination from "../../ui/Pagination/Pagination";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const { totalCount } = useGallery();
  return (
    <div className={styles.container}>
      <div className={styles.searchFieldContainer}>
        <SearchField />
      </div>
      <div className={styles.galleryListContainer}>
        <GalleryList />
      </div>
      <div className={styles.paginationContainer}>
        <Pagination totalCount={totalCount} />
      </div>
    </div>
  );
}
