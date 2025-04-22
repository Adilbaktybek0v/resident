import React from "react";
import scss from "./Title.module.scss"
import next from "../../img/nextRealEstate.svg"
import { Link } from "react-router-dom";


function Title({title, to}) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    
        <main className={scss.main}> 
        <h2>{title}</h2>
        {to != "" && <Link className={scss.button} to={to} onClick={scrollToTop()}>
            <img src={next} alt="" />
          </Link>}
         
        </main>
         
        
     
  );
}

export default Title;
