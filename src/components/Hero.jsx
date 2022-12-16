// Modules
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="buttons-wrapper">
            <a href="https://tmex.gov.tm/tm" target="_blank" className="hero-button">
              Перейти на торговую площадку
            </a>
            <a href="" className="hero-button">
              Подать документы онлайн
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
