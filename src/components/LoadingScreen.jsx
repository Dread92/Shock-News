import React from 'react';
import "./LoadingScreen.scss"
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <img src="shocknewslogo1.png" alt="Loading Spinner" />
      </div>
      <div className="loading-progress">
        <div className="progress-bar"></div>
        <span className="progress-percentage">0%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
