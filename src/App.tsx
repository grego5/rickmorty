import React from "react";
import { Store } from "./store";
import { IEpisode } from "./interfaces";

function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
    const res = await fetch(URL);
    const data = await res.json();
    return dispatch({
      type: "FETCH_DATA",
      data: data._embedded.episodes
    });
  };

  const toggleAddFav = (episode: IEpisode) => {
    if (state.favorites.includes(episode)) {
      deleteFav(episode);
    } else {
      addFav(episode);
    }
  };

  const addFav = (episode: IEpisode) => {
    return dispatch({
      type: "ADD_FAV",
      data: episode
    });
  };

  const deleteFav = (episode: IEpisode) => {
    return dispatch({
      type: "DEL_FAV",
      data: episode
    });
  };

  const favList = state.favorites.map((episode: IEpisode, n: number) => (
    <li key={episode.id} className="favorites__item">
      <a href={episode.url} className="favorites__link">
        {n + 1}. {episode.name}
      </a>
      <div className="favorites__delete" onClick={() => deleteFav(episode)}>
        &times;
      </div>
    </li>
  ));

  return (
    <React.Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <div className="favorites">
          <p>Pick your favorite episode</p>
          <button className="favorites__icon">
            &hearts;
            <span className="favorites__count">{state.favorites.length}</span>
            <ul className="favorites__list">
              {favList.length ? (
                favList
              ) : (
                <li className="favorites__item">List is empty</li>
              )}
            </ul>
          </button>
        </div>
      </header>
      <section className="section-episodes">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <div key={episode.id} className="episode">
              <a
                href={episode.url}
                className="episode__link"
                title={episode.name}>
                <h2 className="episode__title">{episode.name}</h2>
                <img
                  src={episode.image.medium}
                  alt="episode thumbnail"
                  className="episode__image"
                />
              </a>
              <button
                className="episode__like-btn"
                onClick={() => toggleAddFav(episode)}>
                &hearts;
              </button>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
