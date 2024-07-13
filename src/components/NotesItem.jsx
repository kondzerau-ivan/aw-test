import { useNotes } from "../contexts/NotesContext";

export default function NoticeItem({note: {id, text, infoImgSrc, infoImgAlt, infoTemperature, infoDate, infoTime}}) {
  const {removeNote} = useNotes();

  return (
    <li className="notice__item item">
      <p className="item__text">
        {text}
      </p>
      <div className="item__info info">
        <img src={infoImgSrc} width="50" height="50" alt={infoImgAlt} />
        <p className="info__temperature">{infoTemperature}</p>
        <p className="info__date">{infoDate}</p>
        <p className="info__time">{infoTime}</p>
      </div>
      <button className="notice__close close" onClick={() => removeNote(id)} >
        <span className="visually-hidden">close</span>
      </button>
    </li>
  );
}
