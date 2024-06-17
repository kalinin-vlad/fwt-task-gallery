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

export interface PaintingWithDetails extends Painting {
  authorName: string;
  locationName: string;
}
