import React from "react";
import scss from "./RealEstate.module.scss";
import Title from "../title/Title";
import Cart from "../cartFlex/CartApi";




function RealEstate({data, fetchDetail}) {
 
  return (
    <section className={scss.RealEstate}>
      <div className="container">
        <Title title={"недвижимость"} to={"nedvizhimost"}/>
        <Cart data={data} fetchDetail={fetchDetail}/>
        
      </div>
    </section>
  );
}

export default RealEstate;
