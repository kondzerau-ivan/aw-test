import { useState } from "react";
import NotesList from "./components/NotesList";
import InputField from "./components/InputField";

function App() {

  const [notes, setNotes] = useState([{
    id: 0,
    text: 'This is the Notice expample. You can remove this one and start adding yours!',
    infoImgSrc: 'https://placehold.co/60',
    infoTemperature: '+16°C',
    infoDate: '2 Nov 2025',
    infoTime: '16:20'
  }]);

  const addNote = note => {
    setNotes([
      ...notes,
      {
        id: notes.length ? notes[notes.length - 1]['id'] + 1 : 0,
        text: note,
        infoImgSrc: 'https://placehold.co/60',
        infoTemperature: '+16°C',
        infoDate: '2 Nov 2025',
        infoTime: '16:20'
      }
    ])
  }

  const removeNote = id => {
    setNotes(notes.filter(note => note.id !== id))
  }
  
  return (
    <div className="notice">
      <NotesList notes={notes} removeNote={removeNote} />
      <InputField addNote={addNote}/>
    </div>
  )
}

export default App
