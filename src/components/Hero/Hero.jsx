import React from 'react'
import scss from "./Hero.module.scss"
import next from "../../img/next.svg"


function Hero() {
  return (
    <section className={scss.Hero}>
      <div className='container'>
        <h1>МОНОЛИТ - создаем надежность и комфорт вместе!</h1>
        <p>-это первый в своем роде комплекс, который объединяет в себе бизнес-центр и торговый комплекс</p>
        <button className={scss.btnLeft}><img src={next} alt="" /></button>
        <button className={scss.btnRigth}><img src={next} alt="" className={scss.rith} /></button>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
