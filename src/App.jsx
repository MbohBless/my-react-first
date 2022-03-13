import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import NavBar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomerList";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NoMatchpage from "./NoMatchpage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="/customers" exact element={<CustomersList />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="*" element={<NoMatchpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
