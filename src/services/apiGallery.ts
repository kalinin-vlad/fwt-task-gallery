import axios from "axios";
import {
  Author,
  Location,
  Painting,
  GetCombinedDataResponse,
  GetPaintingsResponse,
  GetPaintingsParams,
} from "../utils/types";

export async function getPaintings(
  params: GetPaintingsParams,
): Promise<GetPaintingsResponse> {
  try {
    const response = await axios.get<Painting[]>(
      "https://test-front.framework.team/paintings",
      {
        params: {
          _limit: params.limit,
          _page: params.page,
          ...(params.q && { q: params.q }),
        },
      },
    );

    const totalCount = parseInt(response.headers["x-total-count"], 10);
    if (isNaN(totalCount)) {
      throw new Error("Invalid total count value");
    }

    return { data: response.data, totalCount };
  } catch (error) {
    console.error("Error fething paintings:", error);
    throw error;
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const response = await axios.get<Author[]>(
      "https://test-front.framework.team/authors",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await axios.get<Location[]>(
      "https://test-front.framework.team/locations",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
}

export async function getCombineData(
  params: GetPaintingsParams,
): Promise<GetCombinedDataResponse> {
  try {
    const [paintings, authors, locations] = await Promise.all([
      getPaintings(params),
      getAuthors(),
      getLocations(),
    ]);

    return { paintings, authors, locations };
  } catch (error) {
    console.error("Error fetching combined data:", error);
    throw error;
  }
}
