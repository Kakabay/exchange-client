// Modules
import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import logo from '../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-list-item">
                <Link to={'/'}>ГТСБТ</Link>
              </li>
              <li className="header-nav-list-item">
                <Link to={'/'}>Нормативная база</Link>
              </li>
              <li className="header-nav-list-item">
                <Link to={'/'}>Новости</Link>
              </li>
              <li className="header-nav-list-item">
                <Link to={'/'}>Мультимедия</Link>
              </li>
              <li className="header-nav-list-item">
                <Link to={'/'}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className="sign-in">
            <Link to={'/'} className="sign-in-item">
              Войти / Регистрация
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
