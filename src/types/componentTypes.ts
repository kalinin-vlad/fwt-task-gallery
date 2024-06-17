import { PaintingWithDetails } from "./apiTypes";

export interface PaginationProps {
  totalCount: number;
}

export type PaintingProps = {
  painting: PaintingWithDetails;
};
