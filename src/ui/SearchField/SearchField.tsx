import { useState, FormEvent, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchField.module.scss";
import ButtonIcon from "../../ui/ButtonIcon/ButtonIcon";
import SearchIcon from "./icons/SearchIcon";
import ResetIcon from "./icons/ResetIcon";

export default function SearchField() {
  const [query, setQuery] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) return;

    searchParams.delete("page");
    setSearchParams(searchParams);

    searchParams.set("q", query);
    setSearchParams(searchParams);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleReset() {
    if (!query) return;
    setSearchParams("");
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Painting title"
        className={styles.searchField}
        value={query}
        onChange={handleChange}
      />
      <ButtonIcon
        type="submit"
        className={styles.searchButton}
        icon={<SearchIcon />}
      />
      {query && (
        <ButtonIcon
          type="reset"
          className={styles.resetButton}
          icon={<ResetIcon />}
          onClick={handleReset}
        />
      )}
    </form>
  );
}
