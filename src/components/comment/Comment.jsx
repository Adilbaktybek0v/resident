import { useEffect, useState } from "react";
import scss from "./Comment.module.scss";
import axios from "axios";
import avatar from "../../img/avatar.svg"

const Comment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://resident.kg/api/comment/");
        const activeComments = res.data.filter((item) => item.is_active);
        setData(activeComments);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {data.map((item) => (
        <div className={scss.comment} key={item.id}>
          <div className={scss["comment-header"]}>
            <img
              src={avatar} 
              alt="Аватар"
              className={scss.avatar}
            />
            <div className={scss["user-info"]}>
              <strong>{item.user || "Аноним"}</strong>
              <span className={scss.date}>
              {item.date}
              </span>
            </div>
          </div>
          <p className={scss["comment-text"]}>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Comment;
