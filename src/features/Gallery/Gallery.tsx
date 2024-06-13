import { useSearchParams } from "react-router-dom";
import { useGallery } from "./useGallery";
import { mapPaintingsWithDetails } from "../../utils/mapPaintingsWithDetails";
import styles from "./Gallery.module.scss";
import Painting from "../Painting/Painting";
import Spinner from "../../components/Spinner/Spinner";
import Pagination from "../../ui/Pagination/Pagination";
import Empty from "../../ui/Empty/Empty";

export default function Gallery() {
  const { paintings, authors, locations, isLoading, totalCount } = useGallery();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const paintingWithDetails = mapPaintingsWithDetails(
    paintings,
    authors,
    locations,
  );

  if (isLoading) return <Spinner />;
  if (!paintings?.length) return <Empty resourceName={query ?? ""} />;

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryList}>
        {paintingWithDetails?.map((painting) => (
          <div className={styles.paintingWrapper} key={painting.id}>
            <Painting painting={painting} />
          </div>
        ))}
      </div>

      <div className={styles.paginationContainer}>
        <Pagination totalCount={totalCount} />
      </div>
    </div>
  );
}
