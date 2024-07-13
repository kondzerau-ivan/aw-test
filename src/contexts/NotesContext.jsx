import { createContext, useContext, useState} from "react";
import {API_URL, getCurrentDate, getCurrentTime} from "../config";

export const notesContext = createContext([]);

export const useNotes = () => useContext(notesContext);

export function NotesProvider({children}) {
  const [notes, setNotes] = useState([]);
  const addNote = note => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        let temperatura = Math.round(data.main.temp);
        let symbol = '';
        if (temperatura > 0) {
          symbol = '+';
        } else if (temperatura < 0) {
          symbol = '+';
        }
        setNotes([
          ...notes,
          {
            id: notes.length ? notes[notes.length - 1]['id'] + 1 : 0,
            text: note,
            infoImgSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            infoImgAlt: `${data.weather[0].main}.`,
            infoTemperature: `${symbol}${temperatura}°C`,
            infoDate: getCurrentDate(),
            infoTime: getCurrentTime()
          }
        ])
      });
  }
  const removeNote = id => {
    setNotes(notes.filter(note => note.id !== id))
  }
  return(
    <notesContext.Provider value={{notes, setNotes, addNote, removeNote}}>
      {children}
    </notesContext.Provider>
  )
}
