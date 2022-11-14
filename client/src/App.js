import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Container } from '@chakra-ui/react'

import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
  return (
    <Container >
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes> 

       <Footer />
    </Container>
  );
}

export default App;
