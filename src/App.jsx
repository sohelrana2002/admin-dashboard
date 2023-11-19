import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, List, LogIn, New, Single, SignUp } from "./config/Config";
import { userInputs } from "./data/Data";
import { productInputs } from "./data/Data";
import { useDarkModeContext } from "./context/DarkModeContext";
import './style/dark.scss'

function App() {
  const { darkMode } =useDarkModeContext()
  return (
    <div className={ darkMode ? "app dark" : "app" }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<List />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="users/new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
          <Route path="/users/:userId" element={<Single />} />

          <Route path="/products" element={<List />} />
          <Route path="/products:productId" element={<Single />} />
          <Route
            path="/products/new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
