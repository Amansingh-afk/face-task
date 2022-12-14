import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import RequireAuth from "./components/RequireAuth";
import Auth from "./views/Auth";
import Home from "./views/Home";
import Meme from "./views/Meme";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            exact
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/meme" element={<Meme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
