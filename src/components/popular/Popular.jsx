import React from "react";
import scss from "./Popular.module.scss";
import img1 from "../../img/pop1.svg";
import img2 from "../../img/pop2.svg";
import img3 from "../../img/pop3.svg";
import img4 from "../../img/pop4.svg";
import img5 from "../../img/pop5.svg";

const data = [
  {
    img: img1,
    title: "Отель Орион - не только место для отдыха",
    categori: "роскошный отдых",
    date: "1 февраля 2024",
    min: "5 мин",
  },
  {
    img: img2,
    title: "Один из самых дорогих домов Бишкека",
    categori: "недвижимость",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img3,
    title: "Умная планировка - что это и зачем?",
    categori: "дизайн",
    date: "1 февраля 2024",
    min: "5 мин",
  },
  {
    img: img4,
    title: "Взять квартиру в ипотеку в Бишкек: миссия выполнима?",
    categori: "недвижимость",
    date: "1 февраля 2024",
    min: "1 мин",
  },
  {
    img: img5,
    title: "UNO City - новый город-курорт в Кыргызстане",
    categori: "роскошный отдых",
    date: "1 февраля 2024",
    min: "4 мин",
  },
];

function Popular() {
  const li = data.map((e, index) => (
    <li key={index} style={{ backgroundImage: `url(${e.img})` }}>
      <span className={scss.categori}>{e.categori}</span>
      <h4>{e.title}</h4>
      <p>
        <span className={scss.data}>{e.date}</span>
        <p className={scss.dot}></p>
          <span className={scss.min}>{e.min}</span>
        
      </p>
    </li>
  ));

  return (
    <section className={scss.Popular}>
      <div className="container">
        <main>
          <h2>Популярные</h2>
        </main>
        <ul>{li}</ul>
      </div>
    </section>
  );
}

export default Popular;
