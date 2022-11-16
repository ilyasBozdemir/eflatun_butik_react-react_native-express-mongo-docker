import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Contact from "./pages/Contact";
import Page404 from "./pages/ErrorPage/Page404";
import NewComers from "./pages/NewComers";
import Dress from "./pages/Dress";
import BottomClothing from "./pages/BottomClothing";
import TopClothing from "./pages/TopClothing";
import InnerClothing from "./pages/InnerClothing";
import Outerwear from "./pages/Outerwear";
import Outlet from "./pages/Outlet";
import CombineClothing from "./pages/CombineClothing";
import Discount from "./pages/Discount";


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="/sepetim" element={<Basket />} />
            <Route path="/favorilerim" element={<Favorite />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/yeni-gelenler" element={<NewComers />} />
            <Route path="/elbise" element={<Dress />} />
            <Route path="/ust-giyim" element={<TopClothing />} />
            <Route path="/alt-giyim" element={<BottomClothing />} />/
            <Route path="/ic-giyim" element={<InnerClothing />} />
            <Route path="/dis-giyim" element={<Outerwear />} />
            <Route path="/outlet" element={<Outlet />} />
            <Route path="/kombin" element={<CombineClothing />} />
            <Route path="/indirim" element={<Discount />} />
            <Route element={<Page404 />} />
          </Route>
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
