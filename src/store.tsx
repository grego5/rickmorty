import React from 'react';
import { IState, IAction, IEpisode } from './interfaces';

const initialState: IState = {
   episodes: [],
   favorites: []
};

export const Store = React.createContext<IState | any>(initialState);


function reducer(state: IState, action: IAction): IState {
   switch (action.type) {
      case 'FETCH_DATA':
         return {...state, episodes: action.data}
      case 'ADD_FAV':
         return {...state, favorites: [...state.favorites, action.data]}
      case 'DEL_FAV':
         const favorites = state.favorites.filter((ep:IEpisode) => ep.id !== action.data.id)
         return {...state, favorites}
      default:
         return state;
   }
}

export function StoreProvider(props: any) {
   const [state, dispatch] = React.useReducer(reducer, initialState);
   return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}