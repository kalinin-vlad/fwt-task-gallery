import { useSearchParams } from "react-router-dom";
import { getCombineData } from "../../services/apiGallery";
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  UseGalleryResult,
  GetCombinedDataResponse,
  GetPaintingsParams,
} from "../../types/index";

export function useGallery(): UseGalleryResult {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  // Search query
  const query = searchParams.get("q") || undefined;

  const { data, isLoading, error }: UseQueryResult<GetCombinedDataResponse> =
    useQuery({
      queryKey: ["galleryCombinedData", { page: page, q: query }],
      queryFn: () =>
        getCombineData({
          page,
          limit: import.meta.env.VITE_API_PAGE_SIZE,
          q: query,
        } as GetPaintingsParams),
    });

  const totalPages = data
    ? Math.ceil(data.paintings.totalCount / import.meta.env.VITE_API_PAGE_SIZE)
    : 0;

  // PRE-FETCHING
  if (page < totalPages)
    queryClient.prefetchQuery({
      queryKey: ["galleryCombinedData", { page: page + 1, q: query }],
      queryFn: () =>
        getCombineData({
          page: page + 1,
          limit: import.meta.env.VITE_API_PAGE_SIZE,
          q: query,
        }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["galleryCombinedData", { page: page - 1, q: query }],
      queryFn: () =>
        getCombineData({
          page: page - 1,
          limit: import.meta.env.VITE_API_PAGE_SIZE,
          q: query,
        }),
    });

  return {
    paintings: data?.paintings?.data,
    authors: data?.authors,
    locations: data?.locations,
    isLoading,
    error: error as Error | null,
    totalCount: data?.paintings?.totalCount ?? 0,
  };
}
