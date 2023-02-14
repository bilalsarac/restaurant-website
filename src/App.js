import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import Login from './routes/Login';

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/menu" element = {<Menu />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/orderonline" element = {<Menu />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/donate" element = {<Menu />}/>
      </Routes>
    </>
  );
}

export default App;
