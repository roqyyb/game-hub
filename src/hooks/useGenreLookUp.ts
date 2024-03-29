import useGenres from "./useGenres";

const useGenreLookUp = (id: number) => {
  const { data } = useGenres();
  return data?.results.find((g) => g.id === id);
};

export default useGenreLookUp;
