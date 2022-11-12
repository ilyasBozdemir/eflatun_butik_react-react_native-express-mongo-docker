import "./App.css";
import { BrowserRouter, Routes, Route, useColorMode } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
