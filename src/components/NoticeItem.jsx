export default function NoticeItem() {
  return <li className="notice__item item">
    <p className="item__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente provident, necessitatibus reprehenderit facere corporis alias iusto sequi ipsa dolorum laudantium esse voluptate illo quasi accusantium blanditiis aperiam ducimus? Exercitationem, vel!</p>
    <div className="item__info info">
      <img src="https://placehold.co/60" alt="Wether icon." />
      <p className="info__temperature">+16°C</p>
      <p className="info__date">2 Nov 2025</p>
      <p className="info__time">16:20</p>
    </div>
    <button className="notice__close">close</button>
  </li>;
}
