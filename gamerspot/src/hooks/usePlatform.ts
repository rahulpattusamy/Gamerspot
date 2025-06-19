import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: Platform } = usePlatforms();
  return Platform?.results.find((p) => p.id == id);
};

export default usePlatform;
