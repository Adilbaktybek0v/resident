import React from "react";
import photo from "../../img/photo9.svg";
import next from "../../img/nextRealEstate.svg";
import scss from "./BlockRest.module.scss";
import img1 from "../../img/photo5.svg";
import img2 from "../../img/photo6.svg";
import img3 from "../../img/photo7.svg";
import img4 from "../../img/photo8.svg";
import Title from "../title/Title";
import { Link } from "react-router-dom";

const data = [
  {
    img: img1,
    content: "роскошный отдых",
    title: "Sumbule - SPA центр незабываемого отдыха, красоты и здоровья",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img2,
    content: "роскошный отдых",
    title: "Palazzo - ресторан премиум-класса",
    date: "1 февраля 2024",
    min: "1 мин",
  },
  {
    img: img3,
    content: "роскошный отдых",
    title: "Москва - жилой дом премиум-класса",
    date: "1 февраля 2024",
    min: "5 мин",
  },
  {
    img: img4,
    content: "роскошный отдых",
    title: "UNO City - новый город-курорт в Кыргызстане",
    date: "1 февраля 2024",
    min: "5 мин",
  },
];

function BlockRest() {
  const li = data.map((e, index) => (
    <li key={index}>
      <img src={e.img} alt="" />
      <span className={scss.span}>{e.content}</span>
      <h4>{e.title}</h4>
      <p>
        <span>{e.date}</span>
        <p className={scss.dot}></p>
        <span>{e.min}</span>
      </p>
    </li>
  ));
  return (
    <section className={scss.BlockRest}>
      <div className="container">
        <Title title={"Роскошный отдых"}/>
        <article>
          <main style={{ backgroundImage: `url(${photo})` }}>
            <Link to={"/art"} className={scss.content}>роскошный отдых</Link>
            <h3>Отель Орион - не только место для отдыха</h3>
            <p>
              <span>1 февраля 2024</span>
              <div className={scss.dot}></div>
              <span>5 мин</span>
            </p>
          </main>
          <ul>{li}</ul>
        </article>
      </div>
    </section>
  );
}

export default BlockRest;
