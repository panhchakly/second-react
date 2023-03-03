import Navbar from "./navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import About from "./components/about";
import Contact from "./components/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
