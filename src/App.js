import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Registor/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
