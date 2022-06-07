import { createContext, useContext, useReducer } from 'react';
import { inital } from './reducer';

export const StateContext = createContext<any>(null);

interface Props {
  reducer: any;
  initialState: inital;
  children: React.ReactNode;
}

export const StateProvider = ({ reducer, initialState, children }: Props) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
