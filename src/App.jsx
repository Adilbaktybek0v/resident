import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomPage from "./pages/HomPage";
import HomeRealEatate from "./pages/HomeRealEatate";
import Category from "./pages/Category";
import Interview from "./pages/Interview";
import ArticleHome from "./pages/ArticleHome";
import ContactHome from "./pages/ContactHome";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomPage />} />
          <Route path="/2" element={<Category />} />
          <Route path="/3" element={<HomeRealEatate />} />
          <Route path="/6" element={<Interview />} />
          <Route path="/7" element={<ContactHome/>} />
          <Route path="/art" element={<ArticleHome />} />
          <Route path="/ab" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
