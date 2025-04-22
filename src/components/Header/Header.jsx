import React, { useEffect, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../img/LogoHeader.svg";
import vector from "../../img/vector.svg";
import search from "../../img/search.svg";
import end from "../../img/end.svg";
import { data, Link } from "react-router-dom";
import Google from "../../img/Google.svg";
import burger from "../../img/burger.svg";
import axios from "axios";

export default function Header({ languech }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`https://resident.kg/api/ru/header`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const li = data.map((e) => (
    <a className={scss.link} key={e.id}>
      <Link className={scss.linkTitle} to={`/${e.slug}`}>
        {e.title}
        {e.subcategory.length > 0 && <img src={vector} />}
      </Link>

      {e.subcategory.length > 0 && (
        <nav className={scss.dropdown}>
          <main className={scss.dropdownIner}>
            {" "}
            {e.subcategory.map((e) => (
              <Link to={`/${e.slug}`} className={scss.listDr} key={e.id}>
                {e.title}
              </Link>
            ))}
          </main>
        </nav>
      )}
    </a>
  ));
  return (
    <header className={scss.Header}>
      <main className={scss.topBar}>
        <img src={Google} alt="" className={scss.imgTop} />
        <input
          type="text"
          className={scss.inputTop}
          placeholder="Sign in to MyApp with Google"
        />
        <button className={scss.buttonTop}>
          <img src={end} alt="" />
        </button>
      </main>
      <div className="container">
        <button
          className={showMenu ? scss.none : scss.burger}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={burger} alt="" />
        </button>
        <Link to={"/"} className={!showMenu ? scss.logo : scss.noneLogo}>
          <img src={logo} alt="" />
        </Link>

        <nav
          className={`${showMenu ? scss.nav : ""} ${
            !openMenu ? "" : scss.Nnav
          }`}
        >
          {li}
          <a className={scss.link} key={99}>
            {!loading && (
              <Link className={scss.linkTitle} to={`/contackt`}>
                контакты
              </Link>
            )}
          </a>
          <button className={scss.plus} onClick={() => setOpenMenu(!openMenu)}>
            <img src={end} alt="" />
          </button>
        </nav>
        <label className={showMenu ? scss.label : ""}>
          <button>
            <img src={search} alt="" />
          </button>
          <input type="search" placeholder="Поиск" />
          <button onClick={() => setShowMenu(false)}>
            <img src={end} alt="" />
          </button>
        </label>

        <button
          className={!showMenu ? scss.search : scss.searchNone}
          onClick={() => setShowMenu(true)}
        >
          <img src={search} alt="" />
        </button>
     
      </div>
    </header>
  );
}
