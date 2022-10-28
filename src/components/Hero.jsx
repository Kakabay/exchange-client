// Modules
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="buttons-wrapper">
            <Link to={'/'} className="hero-button">
              Перейти на торговую <br /> площадку
            </Link>
            <Link to={'/'} className="hero-button">
              Подать документы <br /> онлайн
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;