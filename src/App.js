import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import { ProductsListing } from "./containers/ProductsListing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsListing />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
