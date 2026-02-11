import { useMemo } from "react";
import { games } from "../data/games";
import { categories } from "../data/categories";
import { ISearchItem } from "../interfaces/interfaces";

export function useSearch(query: string) {
  const results = useMemo<ISearchItem[]>(() => {
    if (!query || query.length < 2) return [];

    const q = query.toLowerCase();

    const gameResults: ISearchItem[] = games
      .filter(g => g.title.toLowerCase().includes(q))
      .map(g => ({
        type: "game",
        id: g.id,
        title: g.title,
        slug: g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      }));

    const categoryResults: ISearchItem[] = categories
      .filter(c => c.name.toLowerCase().includes(q))
      .map(c => ({
        type: "category",
        name: c.name,
        slug: c.slug,
      }));

    return [...gameResults, ...categoryResults];
  }, [query]);

  return {
    results,
    hasResults: results.length > 0,
  };
}
