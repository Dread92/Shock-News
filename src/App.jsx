import React, { useEffect, useState } from 'react';
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main.jsx";
import "./App.scss";
import { Footer } from './components/Footer';

export function App() {
  const [loading, setLoading] = useState(true); // Initial loading state is true

  useEffect(() => {
    // Simulating a delay of 5 seconds
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading state to false after the delay
    }, 5000);

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the delay
    };
  }, []);

  return (
    <>
      {loading && ( // Render the loading spinner if loading is true
        <div className="loading-spinner">
          <img src="shocknewslogo1.png" alt="Loading Spinner" />
        </div>
      )}
      {!loading && ( // Render the content once loading is false
        <div>
          <Navbar />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}
