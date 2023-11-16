import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, List, LogIn, New, Single } from "./config/Config";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/new" element={<New />} />
          <Route path="/:userId" element={<Single />} />

          <Route path="/products" element={<List />} />
          <Route path="/products:productId" element={<Single />} />
          <Route path="/products/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
