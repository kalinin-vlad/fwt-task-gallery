import { useSearchParams } from "react-router-dom";
import { useGallery } from "./useGallery";
import { mapPaintingsWithDetails } from "../../utils/mapPaintingsWithDetails";
import styles from "./GalleryList.module.scss";
import Painting from "../../components/Painting/Painting";
import Spinner from "../../components/Spinner/Spinner";
import Empty from "../../ui/Empty/Empty";

export default function Gallery() {
  const { paintings, authors, locations, isLoading } = useGallery();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const paintingsWithDetails = mapPaintingsWithDetails(
    paintings,
    authors,
    locations,
  );

  if (isLoading) return <Spinner />;
  if (!paintings?.length) return <Empty resourceName={query ?? ""} />;

  return (
    <div className={styles.galleryList}>
      {paintingsWithDetails?.map((painting) => (
        <div className={styles.paintingWrapper} key={painting.id}>
          <Painting painting={painting} />
        </div>
      ))}
    </div>
  );
}
