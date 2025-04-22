import { useState, useEffect } from 'react';
import Title from '../components/title/Title'
import axios from 'axios';
import Cart from '../components/cartFlex/CartApi';



function Otel({fetchDetail}) {
    
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  
 
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://resident.kg/api/ru/list?search=api_list_list"
        );
       
        const foundItem = res.data.Luxury_Life.filter(obj => obj.id === 241);
        setItem(foundItem);
        console.log("Найден объект:", foundItem);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <Title title={"Luxury Life"}/>
      <Cart data={item}  fetchDetail={fetchDetail}/>

    </div>
  )
}

export default Otel
