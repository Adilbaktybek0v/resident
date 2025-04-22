import React, { useState } from "react";

import scss from "./Cart.module.scss";
import { Link } from "react-router-dom";

export default function Cart({ data, fetchDetail }) {

  const li = data.map((e) => (
    <Link className={scss.li} key={e.id} onClick={()=> fetchDetail(e)} to={"/article"}>
      <img src={e.img} />
      <span className={scss.content}>{e.cat_title}</span>
      <h4>{e.title}</h4>
      <p>{e.created_at}</p>
    </Link>
  ));

  return <>
   <nav className={scss.navCart}>{li}</nav>


  </>
  ;
}
