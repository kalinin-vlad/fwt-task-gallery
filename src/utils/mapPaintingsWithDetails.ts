import {
  Author,
  Location,
  Painting,
  PaintingWithDetails,
} from "../types/index";

export function mapPaintingsWithDetails(
  paintings: Painting[] | undefined,
  authors: Author[] | undefined,
  locations: Location[] | undefined,
): PaintingWithDetails[] {
  if (!paintings || !authors || !locations) {
    return [];
  }

  return paintings.map((painting) => {
    const author = authors.find((auth) => auth.id === painting.authorId);
    const location = locations.find((loc) => loc.id === painting.locationId);

    return {
      ...painting,
      authorName: author ? author.name : "Unknown",
      locationName: location ? location.location : "Unknown",
    };
  });
}
