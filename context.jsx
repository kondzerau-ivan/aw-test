import { createContext, useReducer } from "react";
import reducer from "./src/reducer";

export const NotesContext = createContext();

const initialState = {
  notes: []
}

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setNotes = (data) => {
    dispatch({type: 'SET_NOTES', payload: data});
  }

  value.addNote = (note) => {
    dispatch({type: 'ADD_NOTE', payload: note});
  }

  value.removeNote = (id) => {
    dispatch({type: 'REMOVE_NOTE', payload: id});
  }

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}