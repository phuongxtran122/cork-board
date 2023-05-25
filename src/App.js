import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Board from './components/board';
import SideBar from './components/sidebar';
import Testing from './components/testing';
import './App.css';
import './css/board.css'

function App() {
  return (
    <div className="container">
      <SideBar></SideBar>
      <Board></Board>
     
    </div>
  );
}

export default App;
