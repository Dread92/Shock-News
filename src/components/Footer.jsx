import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

export const Footer = () => {
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
    </footer>
  );
};
