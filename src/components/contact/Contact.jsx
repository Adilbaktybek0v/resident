import React from "react";
import fes from "../../img/fes.svg";
import shape from "../../img/shape.svg";
import inst from "../..//img/inst.svg";
import tiktok from "../../img/tik.svg";
import interview from "../../img/interview.svg"
import scss from "./Contact.module.scss"

const lists = [
  {
    title: "Почтовый индекс:",
    text: "720049",
  },
  {
    title: "Владелец и издатель:",
    text: "ОсОО «Trust house C.A. real estate»",
  },
  {
    title: "Регистрационный номер:",
    text: "10308",
  },
  {
    title: "Свидетельство:",
    text: "#000758",
  },
];

function Contact() {
  const li = lists.map((e, i) => (
    <li key={i} className={scss.list}> 
      <span className={scss.listTitle}>{e.title}</span>
      <span className={scss.listText}>{e.text}</span>
    </li>
  ));
  return (
    <section className={scss.Contact}>
      <div className="container">
        <img src={interview} alt=""  className={scss.img}/>
        <main>
          <div className={scss.ContactTop}>
            <button>контакты</button>
            <h2>г. Бишкек, ул. Нуркамала 29</h2>
            <span className={scss.ContactSchedule}>График работы: с 9:00 до 20:00</span>
          </div>
          <div className={scss.ContactEmail}>
            <a href="#"  className={scss.Email}>journal.resident.kg@gmail.com</a>
            <a href="#" className={scss.Email}>pr.resident.kg@gmail.com</a>
            <a href="#" className={scss.Email}>hr.resident.kg@gmail.com</a>
          </div>
            <ul className={scss.ContactFrame}>{li}</ul>     
          <div className={scss.ContactSocial}>
            <nav>
                <a href="#"><img src={fes} alt="" /></a>
                <a href="#"><img src={shape} alt="" /></a>
                <a href="#"><img src={inst} alt="" /></a>
                <a href="#"><img src={tiktok} alt="" /></a>
            </nav>
            <p>Журнал зарегистрирован в Министерстве юстиции КР</p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Contact;
