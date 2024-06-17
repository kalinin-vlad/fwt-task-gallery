import { Author, Location, Painting } from "./apiTypes";

export interface UseGalleryResult {
  paintings: Painting[] | undefined;
  authors: Author[] | undefined;
  locations: Location[] | undefined;
  isLoading: boolean;
  error: Error | null;
  totalCount: number;
}
