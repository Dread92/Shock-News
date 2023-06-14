import React, { useEffect, useState } from 'react';
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main.jsx";
import "./App.scss";
import {Footer} from './components/Footer'; // Import your footer component

export function App() {

  return (
    <>
      <div className="loading-spinner">
        <img src="shocknewslogo1.png" alt="Loading Spinner" />
      </div>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}



