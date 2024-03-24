import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="text-center">
          © {year} Ravenoso | All Rights Reserved.
        </p>
        <p className="text-center">
       
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          por{' '}
          <a
            href="https://github.com/LolaSL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;