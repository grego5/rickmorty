import React from "react";
import { IEpisode, IEpisodeProps } from './interfaces';

export default function EpisodeList(props: IEpisodeProps) {
  const { episodes, toggleFav, favorites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <div key={episode.id} className="episode">
        <a href={episode.url} className="episode__link" title={episode.name}>
          <h2 className="episode__title">{episode.name}</h2>
          <img
            src={episode.image.medium}
            alt="episode thumbnail"
            className="episode__image"
          />
        </a>
        <button
          className="episode__like-btn"
          onClick={() => toggleFav(episode)}>
          {favorites.includes(episode) ? `\u00D7` : `\u2665`}
        </button>
      </div>
    );
  });
}
