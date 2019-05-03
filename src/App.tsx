import React from "react";
import { Store } from "./store";
import { IEpisode } from "./interfaces";
import { Link } from "@reach/router";
import { deleteFav } from './actions';

function App(props: any) {
  const { state, dispatch } = React.useContext(Store);

  const favList = state.favorites.map((episode: IEpisode, n: number) => (
    <li key={episode.id} className="favorites__item">
      <a href={episode.url} className="favorites__link">
        {n + 1}. {episode.name}
      </a>
      <div className="favorites__delete" onClick={() => deleteFav(episode, dispatch)}>
        &times;
      </div>
    </li>
  ));

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <h1 className="logo__text">Rick and Morty</h1>
        </Link>

        <div className="favorites">
          <p>Pick your favorite episode</p>

          <Link to="/favorites" className="favorites__icon">
            &hearts;
            <span className="favorites__count">{state.favorites.length}</span>
            <ul className="favorites__list">
              {favList.length ? (
                favList
              ) : (
                <li className="favorites__item">List is empty</li>
              )}
            </ul>
          </Link>
        </div>

      </header>
      {props.children}
    </>
  );
}

export default App;
