import Cart from "../components/cartFlex/Cart"
import Header from "../components/Header/Header"
import Title from "../components/title/Title";

import img1 from "../img/photo18.svg";
import img2 from "../img/photo19.svg";
import img3 from "../img/photo20.svg";
import img4 from "../img/photo21.svg";


const data = [
  {
    img: img1,
    title: "Владислав Попов - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img2,
    title: "Анна Шишкина - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img3,
    title: "Владислав Попов - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img4,
    title: "Владислав Попов - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img1,
    title: "Владислав Попов - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img2,
    title: "Анна Шишкина - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img3,
    title: "Владислав Попов - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
  {
    img: img4,
    title: "Владислав Попов - основатель дизайн-студии Freedom Group",
    content: "интервью",
    date: "1 февраля 2024",
    min: "3 мин",
  },
 
];


function Interview() {
  return (
    <section>
        <Header/>
        <Title title={"интервью"}/>
        <Cart data={data}/>
      
    </section>
  )
}

export default Interview
