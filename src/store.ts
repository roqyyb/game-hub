import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setPlatformID: (id: number) => void;
  setSearchText: (searchText: string) => void;
  setSortOrder: (SortOrder: string) => void;
  setGenreID: (genreID: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setPlatformID: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID: id } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
  setGenreID: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
}));

export default useGameQueryStore;
