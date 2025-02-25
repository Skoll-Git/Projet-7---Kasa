import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Page/Home';
import About from "./Page/About";
import Error from "./Page/Error";
import AppartementPage from "./Page/AppartementPage";
import './components/styles/Home.css'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/AppartementPage" element={<AppartementPage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
