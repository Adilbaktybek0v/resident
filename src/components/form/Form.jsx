import React, { useState } from "react";
import axios from "axios";
import scss from "./Form.module.scss"

const FeedbackForm = () => {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://resident.kg/api/comment/", {
        post:241 ,
        user,
        comment
      });
      console.log("Отправлено!", response.data);
      setUser("");
      setComment("");
    } catch (error) {
        console.error("Ошибка при отправке:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
   <h2>Отзывы</h2>
      <input
        type="text"
        placeholder="Имя фамилия"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        id="1"
        placeholder="Напишите отзыв о статье    "
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FeedbackForm;
