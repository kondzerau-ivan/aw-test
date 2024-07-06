export default function NoticeItem({note, removeNote} = props) {
  const {id, text, infoImgSrc, infoTemperature, infoDate, infoTime} = note;


  return (
    <li className="notice__item item">
      <p className="item__text">
        {text}
      </p>
      <div className="item__info info">
        <img src={infoImgSrc} alt="Wether icon." />
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
