import React, { useState, useEffect } from 'react'
import Title from '../components/title/Title'
import Cart from '../components/cartFlex/CartApi'
import axios from 'axios';

function PoleznyeSovety({fetchDetail}) {
    const [data, setData]= useState({Useful_tips:[]});
    const[loading, setLoading]= useState(false);
    
  useEffect(()=>{
    const fetchApi =async()=>{
      setLoading(true)
      try{
        const res = await axios.get("https://resident.kg/api/ru/list?search=api_list_list")
        setData(res.data)
      }catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchApi()
  }, [])
  return (
    <section>
      <div className="container">
        <Title title={"Полезные советы"} to={''}/>
        <Cart data={data.Useful_tips} fetchDetail={fetchDetail} />
      </div>
    </section>
  )
}

export default PoleznyeSovety
