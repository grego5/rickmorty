import { IEpisode, IAction } from "./interfaces";

type Dispatch = React.Dispatch<IAction>;

export const fetchData = async (dispatch: Dispatch) => {
  const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    dispatch({
      type: "FETCH_DATA",
      data: data._embedded.episodes
    });
  } catch (err) {
    console.log(err);
  }
};

export const addFav = (episode: IEpisode, dispatch: Dispatch) => {
  dispatch({
    type: "ADD_FAV",
    data: [episode]
  });
};

export const deleteFav = (episode: IEpisode, dispatch: Dispatch) => {
  dispatch({
    type: "DEL_FAV",
    data: [episode]
  });
};
