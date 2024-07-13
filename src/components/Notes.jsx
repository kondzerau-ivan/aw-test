import { useEffect } from "react";
import {API_URL, getCurrentDate, getCurrentTime} from "../config";
import NotesList from "./NotesList";
import InputField from "./InputField";
import { useNotes } from "../contexts/NotesContext";

export function Notes() {
  const savedNotes = localStorage.getItem('notes');
  const {notes, setNotes} = useNotes();

  useEffect(() => {
    if (savedNotes && JSON.parse(savedNotes).length) {
      setNotes(JSON.parse(savedNotes))
    } else {
      (async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        const temperatura = Math.round(data.main.temp);
        const symbol = temperatura > 0 ? '+' : temperatura < 0 ? '-' : '';
        setNotes([
          {
            id: 0,
            text: 'This is the Notice expample. You can remove this one and start adding yours!',
            infoImgSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            infoImgAlt: `${data.weather[0].main}.`,
            infoTemperature: `${symbol}${temperatura}°C`,
            infoDate: getCurrentDate(),
            infoTime: getCurrentTime()
          }
        ])
      })()
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  return(
    <>
      <NotesList notes={notes} />
      <InputField />
    </>
  )
}