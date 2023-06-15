import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

export const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Adjust the timeout value based on your desired scroll duration
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://t.me/your-telegram-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
      <span>© ShockNews 2023</span>
      <button className={`back-to-top ${isScrolling ? 'scrolling' : ''}`} onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};
