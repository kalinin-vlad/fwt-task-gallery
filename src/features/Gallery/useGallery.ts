import { useSearchParams } from "react-router-dom";
import { getCombineData } from "../../services/apiGallery";
import { PAGE_SIZE } from "../../utils/constants";
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  UseGalleryResult,
  GetCombinedDataResponse,
  GetPaintingsParams,
} from "../../utils/types";

export function useGallery(): UseGalleryResult {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  // Search query
  const query = searchParams.get("q") || undefined;

  // const {
  //   data,
  //   isLoading,
  //   error,
  // }: UseQueryResult<{ data: Painting[]; totalCount: number }> = useQuery({
  //   queryKey: ["gallery", page],
  //   queryFn: () => getPaintings({ page, limit }),
  // });

  const { data, isLoading, error }: UseQueryResult<GetCombinedDataResponse> =
    useQuery({
      queryKey: ["galleryCombinedData", page, query],
      queryFn: () =>
        getCombineData({
          page,
          limit: PAGE_SIZE,
          q: query,
        } as GetPaintingsParams),
    });

  const totalPages = data
    ? Math.ceil(data.paintings.totalCount / PAGE_SIZE)
    : 0;

  // PRE-FETCHING
  if (page < totalPages)
    queryClient.prefetchQuery({
      queryKey: ["galleryCombinedData", { page: page + 1, q: query }],
      queryFn: () =>
        getCombineData({ page: page + 1, limit: PAGE_SIZE, q: query }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["galleryCombinedData", { page: page - 1, q: query }],
      queryFn: () =>
        getCombineData({ page: page - 1, limit: PAGE_SIZE, q: query }),
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
