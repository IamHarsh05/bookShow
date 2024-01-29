import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Show from "./pages/show";
import Booked from "./pages/booked";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:index" element={<Show />} />
          <Route path="/booked" element={<Booked />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
