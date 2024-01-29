import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Show from "./pages/show";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:index" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
