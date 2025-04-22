import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomPage from "./pages/HomPage";
import HomeRealEatate from "./pages/HomeRealEatate";
import Category from "./pages/Category";
import Interview from "./pages/Interview";
import ArticleHome from "./pages/ArticleHome";
import ContactHome from "./pages/ContactHome";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import HomeDIscount from "./pages/HomeDIscount";
import PoleznyeSovety from "./pages/PoleznyeSovety";
import Test from "./pages/test";
import { useState, useEffect } from "react";
import Otel from "./pages/Otel";
import AnalizRieltora from "./pages/AnalizRieltora";
import NedviZarubej from "./pages/NedviZarubej";
import TestCategory from "./pages/TestCategory";

function App() {
  const [detail, setDetail] = useState(() => {
    
    const saved = localStorage.getItem("detail");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("detail", JSON.stringify(detail));
  }, [detail]);


  const fetchDetail=(e)=>{
    setDetail(e)
  }


  const [lang, setLang]=useState("ru")
  const languech =(e)=>{
    setLang(e)
  }

 
  return (
    <>
      <BrowserRouter>
      <Header languech={languech}/>
        <Routes>
          <Route path="/" element={<HomPage lang={lang} fetchDetail={fetchDetail}/>} />
          <Route path="/luxury-life" element={<Category fetchDetail={fetchDetail}/>} />
          <Route path="/nedvizhimost" element={<HomeRealEatate />} />
          <Route path="intervju" element={<Interview fetchDetail={fetchDetail} />} />
          <Route path="contackt" element={<ContactHome/>} />
          <Route path="article" element={<ArticleHome detail={detail} fetchDetail={fetchDetail}/>} />
          <Route path="/ab" element={<AboutUs/>} />
          <Route path="/discount" element={<HomeDIscount/>} />
          <Route path="/poleznye-sovety" element={<PoleznyeSovety fetchDetail={fetchDetail} />} />
          <Route path="/testy" element={<Test fetchDetail={fetchDetail} />} />
          <Route path="/otel" element={<Otel fetchDetail={fetchDetail} />} />
          <Route path="/analiz-rieltora" element={<AnalizRieltora fetchDetail={fetchDetail}/>} />
          <Route path="/nedvizhimost-zarubezhom" element={<NedviZarubej fetchDetail={fetchDetail}/>}/>
          <Route path="/test-category" element={<TestCategory fetchDetail={fetchDetail}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
