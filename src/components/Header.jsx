// Modules
import { Link } from 'react-router-dom';

// Icons
import logo from '../assets/icons/logo.svg';
import burger from '../assets/icons/burger.svg';
import { ReactComponent as Close } from '../assets/icons/close.svg';
import { useState } from 'react';

const Header = () => {
  // States
  const [navActive, setNavActive] = useState(false);

  // Functions
  const togleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header">
      {/* Nav top */}
      <nav className="nav-top">
        <div className="container">
          <div className="nav-top-wrapper">
            <Link to={'/'} className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="nav-top-list">
              <li className="nav-top-list-item">
                <Link to={'/gtsbt'}>ГТСБТ</Link>
              </li>
              <li className="nav-top-list-item">
                <Link to={'/norm'}>Нормативная база</Link>
              </li>
              <li className="nav-top-list-item">
                <Link to={'/'}>Новости</Link>
              </li>
              <li className="nav-top-list-item">
                <Link to={'/'}>Мультимедия</Link>
              </li>
              <li className="nav-top-list-item">
                <Link to={'/'}>Контакты</Link>
              </li>
            </ul>
            <div className="sign-in">
              <Link to={'/'} className="sign-in-item">
                Войти / Регистрация
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Nav top ================== */}

      {/* Nav bottom */}
      <nav className="nav-bottom">
        <div className="container">
          <div className="nav-bottom-wrapper">
            <ul className="nav-bottom-list">
              <li className="nav-bottom-list-item">
                <Link to={'/trade'}>Биржевые торги</Link>
              </li>
              <li className="nav-bottom-list-item">
                <Link to={'/fin'}>Финансовый мониторинг</Link>
              </li>
              <li className="nav-bottom-list-item">
                <Link to={'/register'}>Регистрация договоров</Link>
              </li>
              <li className="nav-bottom-list-item">
                <Link to={'/trade'}>Тарифы и сборы</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Nav bottom ================== */}

      {/* Nav mobile */}
      <div className="mobile-nav">
        <div className="container">
          <div className="mobile-nav-wrapper">
            <Link to={'/'} className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <div className="burger" onClick={togleNav}>
              <img src={burger} />
            </div>
          </div>
        </div>
      </div>

      <nav className={`mobile-nav-content ${navActive ? 'active' : null}`}>
        <div className="close-burger" onClick={togleNav}>
          <Close />
        </div>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/gtsbt'}>ГТСБТ</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/norm'}>Нормативная база</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/'}>Новости</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/'}>Мультимедия</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/'}>Контакты</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/trade'}>Биржевые торги</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/fin'}>Финансовый мониторинг</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/register'}>Регистрация договоров</Link>
          </li>
          <li className="mobile-nav-list-item" onClick={togleNav}>
            <Link to={'/trade'}>Тарифы и сборы</Link>
          </li>
        </ul>
      </nav>
      {/* Nav mobile ================== */}
    </header>
  );
};

export default Header;
