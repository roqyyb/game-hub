import usePlatforms from "./usePlatorms";

const usePlatformLookUp = (id: number | undefined) => {
  const { data } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};

export default usePlatformLookUp;
