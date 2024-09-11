import React from "react";
import Header from "./Component/Header";

import ProductList from "./Component/ProductList";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
