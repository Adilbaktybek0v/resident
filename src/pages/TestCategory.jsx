import {useState, useEffect} from 'react'
import Title from '../components/title/Title'
import axios from 'axios'
import Cart from '../components/cartFlex/CartApi';

function TestCategory({fetchDetail}) {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
   
    
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            "https://resident.kg/api/ru/list?search=api_list_list"
          );
         
          const neededIds = [257];
  
  
          const foundItems = res.data.Nedvizhimost.filter(obj =>
            neededIds.includes(obj.id)
          );
  
          setItem(foundItems);
          console.log("Найденные объекты:", foundItems);
  
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
      <Title title={'Недвижимость'}/>
      <Cart data={item} fetchDetail={fetchDetail}/>
    </div>
  )
}

export default TestCategory
