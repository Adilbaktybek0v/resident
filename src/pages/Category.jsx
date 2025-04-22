import React, { useEffect, useState } from "react";
import Cart from "../components/cartFlex/CartApi";
import Title from "../components/title/Title";
import axios from "axios";


function Category({fetchDetail}) {
  const [data, setData] = useState({ Luxury_Life: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);
  return (
    <section>
      <div className="container">
        <Title title={"luxury-life"} to={""} />
        <Cart data={data.Luxury_Life} fetchDetail={fetchDetail} />
      </div>
    </section>
  );
}

export default Category;
