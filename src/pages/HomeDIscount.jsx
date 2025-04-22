import React, { useEffect, useState } from "react";
import Title from "../components/title/Title";

import axios from "axios";
import Cart from "../components/cartFlex/CartApi";

function HomeDIscount() {
  const [data, setData] = useState({ Discount: [] });
  const [loading, setLoading] = useState(false);

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
  return (
    <section>
      <div className="container">
        {data.Discount[""] && (
          <>
            <Title title="Скидка" to={""} />
            <Cart data={data} />
          </>
        )}
      </div>
    </section>
  );
}

export default HomeDIscount;
