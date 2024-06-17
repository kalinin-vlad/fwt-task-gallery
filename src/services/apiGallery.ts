import {
  Author,
  Location,
  Painting,
  GetCombinedDataResponse,
  GetPaintingsResponse,
  GetPaintingsParams,
} from "../types/index";
import axiosInstance from "./axiosInstance";

export async function getPaintings(
  params: GetPaintingsParams,
): Promise<GetPaintingsResponse> {
  try {
    const response = await axiosInstance.get<Painting[]>("/paintings", {
      params: {
        _limit: params.limit,
        _page: params.page,
        ...(params.q && { q: params.q }),
      },
    });

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
    const response = await axiosInstance.get<Author[]>("/authors");
    return response.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await axiosInstance.get<Location[]>("/locations");
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
