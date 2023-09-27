//tempat data contact berada

import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import AddPage from "../page/AddPage";
import HomePage from "../page/HomePage";


function ContactApp() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/add" element={<AddPage />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default ContactApp;