import { useNavigate } from "react-router-dom";
import { ISearchItem } from "../interfaces/interfaces";

export function useSearchActions() {
  const navigate = useNavigate();

  function handleSearch(query: string) {
    if (!query.trim()) return;
    navigate(`/buscar?q=${query}`);
  }

  function handleSelect(item: ISearchItem) {
    if (item.type === "game") {
      // 🔥 PRODUTO SEMPRE POR ID
      navigate(`/produto/${item.id}`);
      return;
    }

    // 📂 CATEGORIA POR SLUG
    navigate(`/categoria/${item.slug}`);
  }

  return {
    handleSearch,
    handleSelect,
  };
}
