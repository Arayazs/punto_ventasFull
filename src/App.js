import React from "react";
import { Route, Routes } from "react-router-dom";
import login from "./components/Login";
import Sales from "./components/Sales";
import ProductsAdmin from "./components/products/ProductsAdmin";
import ProductsAdd from "./components/products/ProductsAdd";
import ProductsEdit from "./components/products/ProductsEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/products" element={<ProductsAdmin />}></Route>
        <Route path="/products/add" element={<ProductsAdd />}></Route>
        <Route path="/products/edit" element={<ProductsEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
