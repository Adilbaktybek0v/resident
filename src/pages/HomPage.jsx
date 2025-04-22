import React, { useEffect, useState } from "react";
import Popular from "../components/popular/Popular";
import RealEstate from "../components/RealEstate/RealEstate";
import BlockRest from "../components/block_rest/BlockRest";
import Reklama from "../components/reklama/Reklama";
import Interview from "../components/interview/Interview";
import axios from "axios";

export default function HomPage({lang, fetchDetail}) {
  const [data, setData]= useState({Popular:[], Real_estate:[], Rascule_rest:[], Interview: []})
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    const fetchData = async()=>{
     setLoading(true)
     try{
       const res = await axios.get(`https://resident.kg/api/ru/list/status?search=api_list_status_list`)
       setData(res.data)
     }catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
    }
 
    fetchData()
   }, []);
  return (
    <section>
      <Popular data={data.Popular.slice(0, 4)} fetchDetail={fetchDetail}/>
      <RealEstate  data={data.Real_estate.slice(0, 4) }fetchDetail={fetchDetail}/>
      <BlockRest data={data.Rascule_rest[0]}  loading={loading} fetchDetail={fetchDetail}/>
      <Interview data={data.Interview.slice(0 ,4)} fetchDetail={fetchDetail}/>

      <Reklama />
    </section>
  );
}
