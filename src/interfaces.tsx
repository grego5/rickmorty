export interface IEpisode {
   airdate: string
   airstamp: string
   airtime: string
   id: number
   image: {medium: string, original: string}
   name: string
   number: number
   runtime: number
   season: number
   summary: string
   url: string
 }

export interface IState {
   episodes: Array<IEpisode>,
   favorites: Array<IEpisode>
}

export interface IAction {
   type: string,
   data: any
}

export interface IEpisodeProps {
   episodes: Array<IEpisode>,
   favorites: Array<IEpisode>
   toggleFav(episode: IEpisode): void,
 }