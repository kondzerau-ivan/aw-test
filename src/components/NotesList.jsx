import NotesItem from "./NotesItem";

export default function NoticeList({notes, removeNote} = props) {
  return(
    <ul className="notice__list list">
      {
        notes.length ?
        notes.map(note => <NotesItem key={note.id} note={note} removeNote={removeNote} />) :
        <li style={{textAlign: 'center'}}>Ooops... looks like nothing here!<br/>Add new Note!</li>
      }
    </ul>
  );
}