import React from 'react'
import photo from "../../img/photo10.svg";
import next from "../../img/nextRealEstate.svg";
import scss from "./BlockRest.module.scss";
import img1 from "../../img/photo11.svg";
import img2 from "../../img/photo12.svg";
import img3 from "../../img/photo13.svg";
import img4 from "../../img/photo14.svg";
import Title from '../title/Title';

const data = [
    {
        img: img1,
        content: "продукты",
        title:"Галерея - отделочные материалы оптом и в розницу",
        date:"1 февраля 2024",
        min:"3 мин"
    },
    {
        img: img2,
        content: "продукты",
        title:"Все под одной крышей: стройматериалы, сантехника, инструменты, электротовары и мн.",
        date:"1 февраля 2024",
        min:"1 мин"
    },
    {
        img: img3,
        content: "продукты",
        title:"Lustra_kg - люстры премиум качестваМосква - жилой дом премиум-класса",
        date:"1 февраля 2024",
        min:"5 мин"
    },
    {
        img: img4,
        content: "продукты",
        title:`Миссия компании "Matkasym" - создавать товары для уюта в доме и комфорта в городе`,
        date:"1 февраля 2024",
        min:"5 мин"
    },
    {
        img: img3,
        content: "продукты",
        title:"Lustra_kg - люстры премиум качестваМосква - жилой дом премиум-класса",
        date:"1 февраля 2024",
        min:"5 мин"
    },
    {
        img: img4,
        content: "продукты",
        title:`Миссия компании "Matkasym" - создавать товары для уюта в доме и комфорта в городе`,
        date:"1 февраля 2024",
        min:"5 мин"
    },
]

function BlockRestTwo() {
   const list = data.map((e, index) => (
      <li key={index}>
        <img src={e.img} alt="" />
        <nav>
        <span className={scss.span}>{e.content}</span>
        <h4>{e.title}</h4>
        <p>
          <span>{e.date}</span>
          <p className={scss.dot}></p>
          <span>{e.min}</span>
        </p>
        </nav>
        
      </li>
    ));
   const li = data.map((e, index)=>(
         <li key={index}>
             <img src={e.img} alt="" />
             <span className={scss.span}>{e.content}</span>
             <h4>{e.title}</h4>
             <p><span>{e.date}</span><p className={scss.dot}></p><span>{e.min}</span></p>
         </li>
     ))
   return (
     <section className={scss.BlockRest}>
       <div className="container">
       <Title title={"продукты"}/>
         <article>
         <main style={{ backgroundImage: `url(${photo})` }}>
                 <span className={scss.content}>продукты</span>
                 <h3>Tesoro Home - текстильная компания в области декора с 2005 года</h3>
                 <p><span>8 февраля 2024</span><div className={scss.dot}></div><span>4 мин</span></p>
             </main>
             <ul className={scss.ul}>
                 {li}
             </ul>
             <ul >
                 {list}
             </ul>
         </article>
       </div>
     </section>
   );
}

export default BlockRestTwo
