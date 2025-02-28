import React, { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../img/Logo.svg";
import vector from "../../img/vector.svg";
import search from "../../img/search.svg";
import end from "../../img/end.svg"
import { Link } from "react-router-dom";


const links = [
  {
    title: "Недвижимость",
    vec: vector,
    link:"/3"
  },
  {
    title: "Роскошный отдых",
    vec: vector,
    link:"/2"
  },
  {
    title: "дизайн",
    vec: vector,
    link:"/4"
  },
  {
    title: "продукты",
    vec: "",
    link:"/5"
  },
  {
    title: "интервью",
    vec: "",
    link:"/6"
  },
  {
    title: "контакты",
    vec: "",
    link:"/7"
  },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
 

  const li = links.map((e, index) => (
    <a className={scss.link} key={index}>
      <Link className={scss.linkTitle} to={`${e.link}`}>
        {e.title}
      </Link>
      <img src={e.vec} />
      <nav>
        <p></p>
      </nav>
    </a>
  ));
  return (
    <header className={scss.Header}>
      <main>
        <Link to={"/"}> <img src={logo} alt="" /></Link>
       
      </main>
      <div className="container">
        <nav className={showMenu ?  scss.navbar :''}>{li}
          <button className={scss.plus}><img src={end} alt="" /></button>
        </nav>
        <label className={showMenu ? scss.label : ''}>
          <button><img src={search} alt="" /></button>
          <input type="search" placeholder="Поиск"/>
          <button onClick={()=> setShowMenu(!showMenu)}><img src={end} alt="" /></button>
        </label>
        <button className={showMenu ?  scss.nonebtn :scss.search} onClick={()=> setShowMenu(!showMenu)} >
          <img src={search} alt="" />
        </button>
      </div>
    </header>
  );
}
