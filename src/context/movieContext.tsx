import * as React from 'react';
import { MovieType } from '../types/Movie';

type Action = {
  type: 'SET_SELECTED_MOVIE',
  payload: { selectedMovie: MovieType | undefined }
};
type Dispatch = (action: Action) => void;
type State = { selectedMovie: MovieType | undefined };
type MoviesProviderProps = { children: React.ReactNode };
const MoviesStateContext = React.createContext<State | undefined>(undefined);
const MoviesDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);
function movieReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_SELECTED_MOVIE': {
      return { selectedMovie: action?.payload?.selectedMovie };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function MoviesProvider({ children }: MoviesProviderProps) {
  const [state, dispatch] = React.useReducer(movieReducer, { selectedMovie: undefined });
  return (
    <MoviesStateContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  );
}
function useMoviesState() {
  const context = React.useContext(MoviesStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}
function useMoviesDispatch() {
  const context = React.useContext(MoviesDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}
export { MoviesProvider, useMoviesState, useMoviesDispatch };
