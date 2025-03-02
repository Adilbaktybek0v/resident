import React from 'react'
import scss from "./Reklama.module.scss"
import next from "../../img/next 2.svg"
import nextend from "../../img/next3.svg"
import img from '../../img/banner3.svg'
function Reklama() {
  return (
    <section className={scss.Reklama}>
        <div className="container">
            
                <main className={scss.main}>
                    <h2>Предложения от компании</h2>
                     <nav>
                        
                        <button><img src={next} alt="" /></button>
                        <button><img src={nextend} alt="" /></button>
                     </nav>
                </main>
                <main className={scss.mainRek}>
                 <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                </main>
               
                
            
        </div>
      
    </section>
  )
}

export default Reklama
