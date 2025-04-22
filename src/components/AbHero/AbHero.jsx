import React from "react";
import baner from "../../img/banner5.svg";
import scss from "./AbHero.module.scss";

function AbHero() {
  return (
    <section className={scss.AbHero}>
      <div className="container">
        <button>О нас</button>
        <h1>Resident - первый журнал о строительстве в кыргызстане</h1>
        <img src={baner} alt="#" />
      </div>
    </section>
  );
}

export default AbHero;
