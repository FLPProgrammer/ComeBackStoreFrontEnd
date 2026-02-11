import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../hooks/useSearch";
import { useSearchActions } from "../../hooks/useSearchActions";
import {
  SearchContainer,
  Input,
  IconButton,
  Suggestions,
  SuggestionItem,
} from "./styles";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const { results, hasResults } = useSearch(query);
  const { handleSearch, handleSelect } = useSearchActions();

  return (
    <SearchContainer>
      <Input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Digite o que você procura"
        onKeyDown={e => e.key === "Enter" && handleSearch(query)}
      />

      <IconButton onClick={() => handleSearch(query)}>
        <FiSearch size={18} color="#FFF" />
      </IconButton>

      {hasResults && (
        <Suggestions>
            {results.map(item => (
            <SuggestionItem
                key={`${item.type}-${item.type === "game" ? item.id : item.slug}`}
                onClick={() => handleSelect(item)}
            >
                {item.type === "game" ? (
                <>
                    🎮 {item.title}
                </>
                ) : (
                <>
                    📂 {item.name}
                </>
                )}
            </SuggestionItem>
            ))}
        </Suggestions>
        )}

    </SearchContainer>
  );
}
