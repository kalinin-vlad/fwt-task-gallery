import { ReactNode } from "react";

export interface Painting {
  id: number;
  authorId: number;
  created: string;
  imageUrl: string;
  locationId: number;
  name: string;
}

export interface Author {
  id: number;
  name: string;
}

export interface Location {
  id: number;
  location: string;
}

export interface GetPaintingsParams {
  page?: number;
  limit?: number;
  q?: string;
}

export interface GetPaintingsResponse {
  data: Painting[];
  totalCount: number;
}

export interface GetCombinedDataResponse {
  paintings: {
    data: Painting[];
    totalCount: number;
  };
  authors: Author[];
  locations: Location[];
}

export interface UseGalleryResult {
  paintings: Painting[] | undefined;
  authors: Author[] | undefined;
  locations: Location[] | undefined;
  isLoading: boolean;
  error: Error | null;
  totalCount: number;
}

export interface PaintingWithDetails extends Painting {
  authorName: string;
  locationName: string;
}

export interface PaginationProps {
  totalCount: number;
}

export interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
  children: ReactNode;
}

export type PaintingProps = {
  painting: PaintingWithDetails;
};
