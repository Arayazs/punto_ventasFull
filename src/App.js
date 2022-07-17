import React from "react";
import { Route, Routes } from "react-router-dom";
import login from "./components/Login";
import Sales from "./components/Sales";
import ProductsAdmin from "./components/products/ProductsAdmin";
import ProductsAdd from "./components/products/ProductsAdd";
import ProductsEdit from "./components/products/ProductsEdit";

import ClientsAdmin from "./components/clients/ClientsAdmin";
import ClientssAdd from "./components/clients/ClientsAdd";
import ClientsEdit from "./components/clients/ClientsEdit";

import UserAdmin from "./components/clients/UsersAdmin";
import UserAdd from "./components/clients/UsersAdd";
import UserEdit from "./components/clients/UsersEdit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/products" element={<ProductsAdmin />}></Route>
        <Route path="/products/add" element={<ProductsAdd />}></Route>
        <Route path="/products/edit" element={<ProductsEdit />}></Route>
        <Route path="/clients" element={<ClientsAdmin />}></Route>
        <Route path="/clients/add" element={<ClientssAdd />}></Route>
        <Route path="/clients/edit" element={<ClientsEdit />}></Route>
        <Route path="/users" element={<UserAdmin />}></Route>
        <Route path="/users/add" element={<UserAdd />}></Route>
        <Route path="/users/edit" element={<UserEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
