import React from 'react'
import Header from '../components/Header/Header'
import BlockRest from '../components/block_rest/BlockRest'
import Cart from '../components/cartFlex/Cart'
import img1 from "../img/photo17.svg";
import img2 from "../img/photo5.svg";
import img3 from "../img/photo6.svg";
import img4 from "../img/photo15.svg";
import img5 from "../img/photo16.svg";

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
  {
    img: img5,
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
    img: img5,
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


function Category() {
  return (
    <section>
        <Header/>  
        <BlockRest/>
        <Cart data={data}/>    
    </section>
  )
}

export default Category
