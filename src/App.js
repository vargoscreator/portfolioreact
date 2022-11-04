import React from 'react'
import './styles/reset.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

