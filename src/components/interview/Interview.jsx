import React from "react";
import scss from "./Interview.module.scss";
import img1 from "../../img/foto.svg";
import next from "../../img/next.svg";
import { Link } from "react-router-dom";

function Interview() {
  return (
    <section className={scss.Interview}>
      <div className="container">
        <ul className={scss.innerBlock}>
          <li>
            <Link  to={"/6"} className={scss.content}>интервью</Link>
            <h4>Владислав Попов - основатель дизайн-студии Freedom Group</h4>
            <p className={scss.p}>
              <span className={scss.date}>1 февраля 2024</span>
              <p className={scss.dot}></p>
              <span className={scss.min}>5 мин</span>
            </p>
            <a href="#">читать статью</a>
          </li>
        </ul>
        <aside>
          <img src={img1} alt="" />
        </aside>
        <ul className={scss.ul}>
          <li className={scss.li}></li>
          <li className={scss.li}></li>
          <li className={scss.li}></li>
          <li className={scss.li}></li>
          <li className={scss.li}></li>
        </ul>
        <nav>
            <button className={scss.left}><img src={next} alt="" /></button>
            <button ><img src={next} alt="" className={scss.next}/></button>
        </nav>
      </div>
    </section>
  );
}

export default Interview;
