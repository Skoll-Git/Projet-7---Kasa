import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './Page/App';
import About from "./Page/About";
import Error from "./Page/Error";
import './components/styles/App.css'

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}/>
      <Route path="/logement/:id" element={<h1>Logement</h1>} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
