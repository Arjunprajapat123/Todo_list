import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"

import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import MainContent from "./Components/MainContent";
import CGL from "./Components/CGL";
import CHSL from "./Components/CHSL";
import MTS from "./Components/MTS";
import GD from "./Components/GdConstable";
import Instcgl from "./Components/InstructionCgl";
import Instchsl from "./Components/InstructionChsl";
import Instmts from "./Components/InstructionMts";
import Instgd from "./Components/InstructionGd";
import TestQn1 from "./Components/TestQn1";
import TestQn2 from "./Components/TestQn2";

export default function App() {

  return (
    <>

     <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/navbar" element={<Navbar/>} />
            <Route path= "/login" element={<Login/>} />
            <Route path= "/signup" element={<SignUp/>} />
            <Route path= "/main" element={<MainContent/>} />
            <Route path="/cgl" element={<CGL></CGL>} />
            <Route path="/chsl" element={<CHSL></CHSL>} />
            <Route path="/mts" element={<MTS></MTS>} />
            <Route path="/gdconstable" element={<GD></GD>} />
            <Route path="/Instcgl" element={<Instcgl></Instcgl>} />
            <Route path="/Instchsl" element={<Instchsl></Instchsl>} />
            <Route path="/Instmts" element={<Instmts></Instmts>} />
            <Route path="/Instgd" element={<Instgd></Instgd>} />
            <Route path="/teststart" element={ <TestQn1></TestQn1> } />
            <Route path="/testQn2" element={ <TestQn2></TestQn2> } />
        </Routes>
     </BrowserRouter>
    </>
  )
}