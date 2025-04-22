import React, { useEffect, useState } from "react";
import scss from "./Interview.module.scss";

import Cart from "../cartFlex/CartApi";
import Title from "../title/Title";

// const data = [
//   {
//     img: img1,
//     title: "Владислав Попов - основатель дизайн-студии Freedom Group",
//     content: "интервью",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img2,
//     title: "Анна Шишкина - основатель дизайн-студии Freedom Group",
//     content: "интервью",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img3,
//     title: "Владислав Попов - основатель дизайн-студии Freedom Group",
//     content: "интервью",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img4,
//     title: "Владислав Попов - основатель дизайн-студии Freedom Group",
//     content: "интервью",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },

// ];

function Interview({data, fetchDetail}) {
 
  // const [data, setData]= useState({Interview:[]})
  // const [loading, setLoading]= useState(false)

  // useEffect(() => {
  //   const fetchData = async()=>{
  //    setLoading(true)
  //    try{
  //      const res = await axios.get(`${url}/list/status?search=api_list_status_list`)
  //      setData(res.data)
  //    }catch (error) {
  //      console.error(error);
  //    } finally {
  //      setLoading(false);
  //    }
  //   }
 
  //   fetchData()
  //  }, []);
  return (
    <section className={scss.Interview}>
      <div className="container">
        <Title title={"Интервью"} to={"intervju"} />
        <Cart data={data} fetchDetail={fetchDetail}/>
      </div>
    </section>
  );
}

export default Interview;
