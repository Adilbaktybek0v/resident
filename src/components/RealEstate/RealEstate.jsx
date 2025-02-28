import React from "react";
import scss from "./RealEstate.module.scss";
import img1 from "../../img/photo1.svg";
import img2 from "../../img/photo2.svg";
import img3 from "../../img/photo3.svg";
import img4 from "../../img/photo4.svg";
import Title from "../title/Title";
import Cart from "../cartFlex/Cart";

const data = [
  {
    img: img1,
    title: "Москва - жилой дом премиум-класса",
    content: "Недвижимость",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img2,
    title: "UNO City - новый город-курорт в Кыргызстане",
    content: "Недвижимость",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img3,
    title: "Взять квартиру в ипотеку в Бишкеке: миссия выполнима?",
    content: "Недвижимость",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img4,
    title: "Секреты Дубай, недвижимость за рубежом",
    content: "Недвижимость",
    date: "1 февраля 2024",
    min: "3 мин",
  },
];



function RealEstate() {
 
  return (
    <section className={scss.RealEstate}>
      <div className="container">
        <Title title={"недвижимость"}/>
        <Cart data={data}/>
        
      </div>
    </section>
  );
}

export default RealEstate;
