import React from "react";
import { Store } from "./store";
import { IEpisode, IEpisodeProps } from "./interfaces";
import { fetchData, addFav, deleteFav } from "./actions";

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch);
  });

  const toggleFav = (episode: IEpisode) => {
    if (state.favorites.includes(episode)) {
      deleteFav(episode, dispatch);
    } else {
      addFav(episode, dispatch);
    }
  };

  const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFav,
    favorites: state.favorites
  };

  return (
    <React.Suspense fallback={<div className="loader">Loading</div>}>
      <section className="section-episodes">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}
