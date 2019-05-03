import React from 'react';
import { IState, IAction, IEpisode } from './interfaces';

const initialState: IState = {
   episodes: [],
   favorites: []
};

export const Store = React.createContext<IState | any>(initialState);


function reducer(state: IState, {type, data}: IAction): IState {
   switch (type) {
      case 'FETCH_DATA':
         return {...state, episodes: data}
      case 'ADD_FAV':
         return {...state, favorites: [...state.favorites, data[0]]}
      case 'DEL_FAV':
         const favorites = state.favorites.filter((ep:IEpisode) => ep.id !== data[0].id)
         return {...state, favorites}
      default:
         return state;
   }
}

export function StoreProvider({children}: JSX.ElementChildrenAttribute) {
   const [state, dispatch] = React.useReducer(reducer, initialState);
   return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}