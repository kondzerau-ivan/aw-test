import { useState, useEffect } from "react";
import { API_URL } from "./config";
import NotesList from "./components/NotesList";
import InputField from "./components/InputField";

function App() {
  const [notes, setNotes] = useState([]);
  const temp = localStorage.getItem('notes');
  const getCurrentDate = () => new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const getCurrentTime = () =>  new Date().toLocaleTimeString('en-GB', { minute: '2-digit', hour: '2-digit' });

  useEffect(() => {
    if(temp && JSON.parse(temp).length) {
      setNotes(JSON.parse(temp))
    } else {
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
      })
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

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

  return (
    <div className="notice">
      <NotesList notes={notes} removeNote={removeNote} />
      <InputField addNote={addNote} />
    </div>
  )
}

export default App
