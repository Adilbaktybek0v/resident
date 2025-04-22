import { data } from "react-router-dom";
import Cart from "../components/cartFlex/CartApi";
import Title from "../components/title/Title";
import axios from "axios";
import img1 from "../img/photo18.svg";
import img2 from "../img/photo19.svg";
import img3 from "../img/photo20.svg";
import img4 from "../img/photo21.svg";
import { useState, useEffect } from "react";




function Interview({fetchDetail}) {
  const [data, setData]= useState([])
  const [loading, setLoading]= useState(false)


  const interviews = Object.values(data)
  .flat() 
  .filter(item => item.cat_title === "Интервью");

 
useEffect(() => {
  const fetchData = async()=>{
    setLoading(true)
    try{
      const res = await axios.get("https://resident.kg/api/ru/list/status?search=api_list_status_list")
      setData(res.data)
    }catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  fetchData()
  }, []);
  return (
    <section className="container">
       
        <Title title={"интервью"}  to={""}/>
        <Cart data={interviews} fetchDetail={fetchDetail}/>
      
    </section>
  )
}

export default Interview
