import React from "react";
import banner from "../../img/banner4.svg"
import scss from "./ArticleHero.module.scss"
import next from '../../img/nextArticle.svg'
import { Link } from "react-router-dom";

function ArticleHero() {
  return (
    <section className={scss.ArticleHero}>
      <div className="container">
        <Link to={"/2"}>
          <img src={next} alt="" />
        </Link>
        <nav>
        <a>роскошный отдых</a>
        <h1>Отель Орион - не только место для <br/> отдыха</h1>
        <h5>Алина ирисова</h5>
        <p>
          <span className={scss.date}>1 февраля 2024</span>
          <p className={scss.dot}></p>
          <span className={scss.min}>5 мин</span>
        </p>
        </nav>
        
       
        <img src={banner} alt="" />
      </div>
    </section>
  );
}

export default ArticleHero;
