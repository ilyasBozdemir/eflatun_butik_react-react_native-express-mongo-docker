import { Routes, Route } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import Layout from "./Layout";

import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
