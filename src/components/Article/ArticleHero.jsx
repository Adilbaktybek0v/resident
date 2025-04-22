import { useState, useEffect } from "react";
import banner from "../../img/banner4.svg";
import scss from "./ArticleHero.module.scss";
import bx from "../../img/bx.png";

import axios from "axios";
import Cart from "../cartFlex/Cart";
import Form from "../form/Form";
import Comment from "../comment/Comment";

function ArticleHero({ detail, fetchDetail }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const newData = Object.values(data)
    .flat()
    .filter((i) => i.cat_title == detail.cat_title);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://resident.kg/api/ru/list?search=api_list_list"
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  const tagsArray = detail.tags ? detail.tags.split(",").map(tag => tag.trim()) : [];

  return (
    <section className={scss.ArticleHero}>
      <div className={`${"container"} ${scss.div}`}>
        <main>
          <h1>{detail.title}</h1>
          <span className={scss.span}>
            <button className={scss.button}>{detail.cat_title}</button>
            <h5 className={scss.h5}>{detail.user}</h5>
            <p className={scss.pp}>{detail.created_at}</p>
            <p className={scss.p}>
              <img className={scss.viewsImg} src={bx} alt="" />
              <p className={scss.vievs}>{detail.views}</p>
            </p>
          </span>

          <img className={scss.img} src={detail.img} alt="" />

          <div className={scss.bigCart}>
            {detail.detail.map((item, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            ))}
          </div>
          {tagsArray.length > 0 && (
            <main>
              <h3>Теги:</h3>
              <ul>
                {tagsArray.map((e, i) => (
                  <li key={i} className={scss.li}>
                    {e}
                  </li>
                ))}
              </ul>
            </main>
          )}

          <Form />
        <Comment/>
        </main>
        <Cart data={newData} fetchDetail={fetchDetail} />
      </div>
    </section>
  );
}

export default ArticleHero;
