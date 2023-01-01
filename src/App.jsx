import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Dashboard, NotFound } from "./pages";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
