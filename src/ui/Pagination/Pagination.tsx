import { useSearchParams } from "react-router-dom";
import { generatePages } from "./paginationUtils";
import { PaginationProps } from "../../utils/types";
import { ArrowLeftIcon, ArrowRightIcon } from "./ArrowsIcons";
import { PAGE_SIZE } from "../../utils/constants";
import styles from "./Pagination.module.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

export default function Pagination({ totalCount }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === totalPages ? currentPage : currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  function handlePageClick(page: number) {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  }

  const pages = generatePages(totalPages, currentPage);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <ButtonIcon
        onClick={prevPage}
        icon={<ArrowLeftIcon />}
        disabled={currentPage === 1}
        className={styles.paginationIcon}
      />
      <ul>
        {pages.map((page, index) =>
          typeof page === "number" ? (
            <li
              key={index}
              className={currentPage === page ? styles.active : ""}
            >
              <button onClick={() => handlePageClick(page)}>{page}</button>
            </li>
          ) : (
            <li key={index} className={styles.ellipsis}>
              {page}
            </li>
          ),
        )}
      </ul>
      <ButtonIcon
        onClick={nextPage}
        icon={<ArrowRightIcon />}
        disabled={currentPage === totalPages}
        className={styles.paginationIcon}
      />
    </div>
  );
}
