import React from "react";
import scss from "./AbCompany.module.scss";
import Title from "../title/Title";
import img1 from "../../img/AbU1.svg";
import img2 from "../../img/AbU2.svg";
import img3 from "../../img/AbU3.svg";
import img4 from "../../img/AbU4.svg";

function AbCompany() {
  return (
    <section className={scss.AbCompany}>
      <div className="container">
        <Title title={"о компании"} />
        <article>
          <nav>
            <p>
              Мы видим свое предназначение в том, чтобы объединить мир через
              истинное кыргызское гостеприимство и национальную культуру. Через
              улучшение качества сервиса, обеспечивать процветание компании и
              сотрудников.
            </p>
            <p>
              Главная цель - превзойти ожидания наших гостей. Орион - больше,
              чем отель! Мы видим свое предназначение в том, чтобы объединить
              мир через истинное кыргызское гостеприимство и национальную
              культуру. Через улучшение качества сервиса, обеспечивать
              процветание компании и сотрудников.
            </p>
          </nav>
          <img src={img1} alt="" />
        </article>
        <main className={scss.main}>
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </main>
      </div>
    </section>
  );
}

export default AbCompany;
