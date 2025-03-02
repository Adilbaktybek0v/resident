import scss from "./ArtAbaut.module.scss"
import img1 from "../../img/photo5.svg";
import img2 from "../../img/photo6.svg";
import img3 from "../../img/photo15.svg";
import img4 from "../../img/photo16.svg";
import photo1 from "../../img/articlePhoto.svg"
import photo2 from "../../img/articlePhoto2.svg"
import photo3 from "../../img/articlePhoto3.svg"
import profil from "../../img/profil.svg"


import React from 'react'

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

const links = ["отель", "роскошный отдых", "отдых", "место встречи"]

function ArtAbaut() {

    const li = data.map((e, index) => (
        <li key={index}>
          <img src={e.img} alt="" />
          <span className={scss.content}>{e.content}</span>
          <h4>{e.title}</h4>
          <p>
            <span>{e.date}</span>
            <p className={scss.dot}></p>
            <span>{e.min}</span>
          </p>
        </li>
      ));


const link = links.map((el)=> <a>{el}</a>)
  return (
    <section className={scss.ArtAbaut}>
      <div className="container">
        
        <article>
            <h3>Миссия - За гранью обычного</h3>
            <p>Мы видим свое предназначение в том, чтобы объединить мир через истинное кыргызское гостеприимство и национальную культуру. Через улучшение качества сервиса, обеспечивать процветание компании и сотрудников. Главная цель - превзойти ожидания наших гостей. Орион - больше, чем отель! Мы видим свое предназначение в том, чтобы объединить мир через истинное кыргызское гостеприимство и национальную культуру. Через улучшение качества сервиса, обеспечивать процветание компании и сотрудников.</p>
            <aside>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
            </aside>
            <h3>Место для деловых встреч</h3>
            <p><span>В отеле «Орион» есть не только уютные номера и прекрасный ресторан, но и высококлассный конференц-зал, который поразит своей современной аудиовизуальной техникой и функциональностью. Он является идеальным местом для проведения деловых встреч, конференций и частных ужинов.</span>

            <br />
            <br />
            <span>
            Конференц-зал «Ак-Сай» имеет площадь в 123 квадратных метра, а его вместимость составляет от 35 до 100 человек в зависимости от рассадки. П-образная рассадка вмещает до 30 человек, а в театральной версии зала могут поместиться до 100 гостей.
            </span>
           </p>
           <img src={photo3} className={scss.photoBig} alt="" />
           <p>В отеле «Орион» - это не только место для отдыха и проживания, но и идеальное место для проведения деловых и культурных мероприятий в самом центре Бишкека. Конференц-зал - прекрасный выбор для тех, кто ищет место для проведения важных мероприятий в комфортном и уютном атмосферном. Современное оборудование и внимательный персонал гарантируют, что каждое мероприятие.</p>


        </article>
        <ul>
          <h3>Читайте также:</h3>
          {li}</ul>
        <form action="">
            <main>
            <h3>Теги:</h3>
            <nav>{link}</nav>
            </main>
            <label htmlFor="">
                <h2>Отзывы</h2>
                <input type="name" placeholder="Имя и фамилия" />
                <textarea placeholder="Напишите отзыв о статье"></textarea>
            </label>
            <button>Добавить</button>
            <div>
                <main>
                    <img src={profil} alt="" />
                    <div>
                        <h5>Нурзида Асанбекова</h5>
                        <span>7 марта 2024</span>
                        <p>Много где бывал, много отелей видел. Орион меня удивил. Огромный бассейн, хамам и сауна. Идеальная чистота , в номере также. Завтрак супер! Номер люкс огромный, 70 м2 с гостевой комнатой. Постельное белье👍, никаких запахов, хотя всюду ковровое покрытие. Персонал вышколен!молодцы!  Удачи ребятам, обязательно приедем еще.</p>
                    </div>
                </main>
            </div>
        </form>
       
     
      </div>
    </section>
  )
}

export default ArtAbaut
