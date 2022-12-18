// Modules
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ lang }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="buttons-wrapper">
            <a href={`https://tmex.gov.tm/${lang}`} target="_blank" className="hero-button">
              {lang === 'ru'
                ? 'Перейти на торговую площадку'
                : lang === 'tm'
                ? 'Söwda meýdança geçmek'
                : lang === 'en'
                ? 'Go to the marketplace'
                : null}
            </a>
            <a href="/" className="hero-button">
              {lang === 'ru'
                ? 'Подать документы онлайн'
                : lang === 'tm'
                ? 'Resminamalary onlaýn tabşyrmak'
                : lang === 'en'
                ? 'Apply documents online'
                : null}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
