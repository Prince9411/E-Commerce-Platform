import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
const App = () => {
  return (
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
      </CartProvider>
  );
};

export default App;
