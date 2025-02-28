import React from "react";
import scss from "./Title.module.scss"
import next from "../../img/nextRealEstate.svg"


function Title({title}) {
  return (
    <section className={scss.Title}>
      <div className="container">
        <main>
        <h2>{title}</h2>
          <button>
            <img src={next} alt="" />
          </button>
        </main>
         
        
      </div>
    </section>
  );
}

export default Title;
