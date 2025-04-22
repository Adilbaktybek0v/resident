import scss from "./Popular.module.scss";
import Cart from "../cartFlex/CartApi";




function Popular({data, fetchDetail}) {
 
  return (
    <section className={scss.Popular}>
      <div className="container">
        <main>
          <h2>Популярные</h2>
        </main>
      <Cart data={data} fetchDetail={fetchDetail}/>
      </div>
    </section>
  );
}

export default Popular;
