import React, { useEffect, useState } from 'react'
import Title from '../components/title/Title'
import Cart from '../components/cartFlex/CartApi'
import axios from 'axios';

import img1 from "../img/photo1.svg";
import img2 from "../img/photo2.svg";
import img3 from "../img/photo3.svg";
import img4 from "../img/photo4.svg";

// const data = [
//   {
//     img: img1,
//     title: "Москва - жилой дом премиум-класса",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img2,
//     title: "UNO City - новый город-курорт в Кыргызстане",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img3,
//     title: "Взять квартиру в ипотеку в Бишкеке: миссия выполнима?",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img4,
//     title: "Секреты Дубай, недвижимость за рубежом",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img1,
//     title: "Москва - жилой дом премиум-класса",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img2,
//     title: "UNO City - новый город-курорт в Кыргызстане",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img3,
//     title: "Взять квартиру в ипотеку в Бишкеке: миссия выполнима?",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
//   {
//     img: img4,
//     title: "Секреты Дубай, недвижимость за рубежом",
//     content: "Недвижимость",
//     date: "1 февраля 2024",
//     min: "3 мин",
//   },
// ];

function HomeRealEatate() {
  const [data, setData]=useState({Nedvizhimost:[]})
  const[loading, setLoading]=useState(false)

  useEffect(()=>{
    const fetchApi =async()=>{
      setLoading(true)
      try{
        const res = await axios.get("https://resident.kg/api/ru/list?search=api_list_list")
        setData(res.data)
      }catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchApi()
  }, [])
  return (
    <section>
      <div className='container'>
      <Title title="недвижимость" to={''}/>
      <Cart data={data.Nedvizhimost}/>
      </div>
     
    </section>
  )
}

export default HomeRealEatate
