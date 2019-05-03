import { IEpisode } from "./interfaces";

export const fetchData = async (dispatch: any) => {
  const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
  const res = await fetch(URL);
  const data = await res.json();
  return dispatch({
    type: "FETCH_DATA",
    data: data._embedded.episodes
  });
};

export const addFav = (episode: IEpisode, dispatch: any) => {
  return dispatch({
    type: "ADD_FAV",
    data: episode
  });
};

export const deleteFav = (episode: IEpisode, dispatch: any) => {
  return dispatch({
    type: "DEL_FAV",
    data: episode
  });
};
