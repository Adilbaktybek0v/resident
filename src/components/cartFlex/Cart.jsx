import React, { useState } from "react";

import scss from "./Cart.module.scss";


export default function Cart({ data, fetchDetail }) {

    const handleClick = (e) => {
        fetchDetail(e);
        window.scrollTo({ top: 0, behavior: "smooth" }); 
        
      };

  const li = data.map((e) => (
    <li className={scss.list} key={e.id} onClick={()=> handleClick(e)} to={"/article"}>
      <img src={e.img} />
      <span className={scss.content}>{e.cat_title}</span>
      <h4>{e.title}</h4>
      <p>{e.created_at}</p>
    </li>
  ));

  return <>
   <nav className={scss.ul}>
    <h2>Читайте также</h2>
    {li}</nav>


  </>
  ;
}
