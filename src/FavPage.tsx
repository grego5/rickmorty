import React from "react";
import { Store } from "./store";
import { IEpisode, IEpisodeProps } from "./interfaces";
import { deleteFav } from "./actions";

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  const toggleFav = (episode: IEpisode) => deleteFav(episode, dispatch);
  const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));
  const props: IEpisodeProps = {
    episodes: state.favorites,
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
