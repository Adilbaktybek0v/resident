import React from 'react'

import scss from "./Cart.module.scss"





export default function Cart({data}) {
    const li = data.map((e, index) => (
        <li key={index}>
          <img src={e.img} />
          <span className={scss.content}>{e.content}</span>
          <h4>{e.title}</h4>
          <p>
            <span className={scss.date}>{e.date}</span>
            <p className={scss.dot}></p>
            <span className={scss.min}>{e.min}</span>
          </p>
        </li>
      ));

  return (
    <section className={scss.Cart}>
      <div className='container'>
      <ul>{li}</ul>
      </div>
    </section>
  )
}
