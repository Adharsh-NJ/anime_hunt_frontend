import { fetchCallAnime } from "./MainService";

export const getAnimeLists = async () => {
    const url = "/anime";
    return await fetchCallAnime(url);
  };

  export const getAnimeDetails = async (animeId) => {
    const url = `/anime/${animeId}`;
    return await fetchCallAnime(url);
  };