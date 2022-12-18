// Modules
import { Link } from 'react-router-dom';

// Icons
import logo from '../assets/icons/logo.svg';
import burger from '../assets/icons/burger.svg';
import { useState } from 'react';

const Header = ({ lang, setLang }) => {
  // States
  const [navActive, setNavActive] = useState(false);
  // Functions
  const toggleNav = () => {
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

            {lang === 'ru' ? (
              <ul className="nav-top-list">
                <li className="nav-top-list-item">
                  <Link to={'/gtsbt'}>ГТСБТ</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/norm'}>Нормативная база</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/news'}>Новости</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/multimedia'}>Мультимедиа</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/contacts'}>Контакты</Link>
                </li>
              </ul>
            ) : null}

            {lang === 'tm' ? (
              <ul className="nav-top-list">
                <li className="nav-top-list-item">
                  <Link to={'/gtsbt'}>TDHÇMB</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/norm'}>Kanunçylyk</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/news'}>Habarlar</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/multimedia'}>Multimediýa</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/contacts'}>Salgymyz</Link>
                </li>
              </ul>
            ) : null}

            {lang === 'en' ? (
              <ul className="nav-top-list">
                <li className="nav-top-list-item">
                  <Link to={'/gtsbt'}>SCRMET</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/norm'}>Normative base</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/news'}>News</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/multimedia'}>Multimedia</Link>
                </li>
                <li className="nav-top-list-item">
                  <Link to={'/contacts'}>Contacts</Link>
                </li>
              </ul>
            ) : null}

            {lang === 'ru' ? (
              <div className="sign-in">
                <a
                  href="https://shahsyotag.exchange.gov.tm/login"
                  target="_blank"
                  className="sign-in-item">
                  Личный кабинет
                </a>
              </div>
            ) : null}

            {lang === 'tm' ? (
              <div className="sign-in">
                <a
                  href="https://shahsyotag.exchange.gov.tm/login"
                  target="_blank"
                  className="sign-in-item">
                  Şahsy otagy
                </a>
              </div>
            ) : null}

            {lang === 'en' ? (
              <div className="sign-in">
                <a
                  href="https://shahsyotag.exchange.gov.tm/login"
                  target="_blank"
                  className="sign-in-item">
                  My account
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      {/* Nav top ================== */}

      {/* Nav bottom */}
      <nav className="nav-bottom">
        <div className="container">
          <div className="nav-bottom-wrapper">
            {lang === 'ru' ? (
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
                  <Link to={'/tarif'}>Тарифы и сборы</Link>
                </li>
              </ul>
            ) : null}

            {lang === 'tm' ? (
              <ul className="nav-bottom-list">
                <li className="nav-bottom-list-item">
                  <Link to={'/trade'}>Birža söwdalary</Link>
                </li>
                <li className="nav-bottom-list-item">
                  <Link to={'/fin'}>Maliýe gözegçiligi</Link>
                </li>
                <li className="nav-bottom-list-item">
                  <Link to={'/register'}>Şertnamalary hasaba almak</Link>
                </li>
                <li className="nav-bottom-list-item">
                  <Link to={'/tarif'}>Nyrhlar we ýygymlar</Link>
                </li>
              </ul>
            ) : null}

            {lang === 'en' ? (
              <ul className="nav-bottom-list">
                <li className="nav-bottom-list-item">
                  <Link to={'/trade'}>Exchange auctions</Link>
                </li>
                <li className="nav-bottom-list-item">
                  <Link to={'/fin'}>Financial monitoring</Link>
                </li>
                <li className="nav-bottom-list-item">
                  <Link to={'/register'}>Contracts registration</Link>
                </li>
                <li className="nav-bottom-list-item">
                  <Link to={'/tarif'}>Tariffs and fees</Link>
                </li>
              </ul>
            ) : null}
            <div className="nav-lang-wrapper">
              <button
                className={`nav-lang-item ${lang === 'en' ? 'lang-active' : ''}`}
                onClick={() => setLang('en')}>
                EN
              </button>
              <button
                className={`nav-lang-item ${lang === 'tm' ? 'lang-active' : ''}`}
                onClick={() => setLang('tm')}>
                TK
              </button>
              <button
                className={`nav-lang-item ${lang === 'ru' ? 'lang-active' : ''}`}
                onClick={() => setLang('ru')}>
                RU
              </button>
            </div>
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
            <div className="burger" onClick={toggleNav}>
              <img src={burger} />
            </div>
          </div>
        </div>
      </div>

      <nav className={`mobile-nav-content ${navActive ? 'active' : null}`}>
        <div className="mobile-nav-content-wrapper">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/gtsbt'}>ГТСБТ</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/norm'}>Нормативная база</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/'}>Новости</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/'}>Мультимедия</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/'}>Контакты</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/trade'}>Биржевые торги</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/fin'}>Финансовый мониторинг</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/register'}>Регистрация договоров</Link>
            </li>
            <li className="mobile-nav-list-item" onClick={toggleNav}>
              <Link to={'/trade'}>Тарифы и сборы</Link>
            </li>
          </ul>
          <div className="nav-lang-wrapper-mobile">
            <button
              className={`nav-lang-item ${lang === 'en' ? 'lang-active' : ''}`}
              onClick={() => setLang('en')}>
              EN
            </button>
            <button
              className={`nav-lang-item ${lang === 'tm' ? 'lang-active' : ''}`}
              onClick={() => setLang('tm')}>
              TK
            </button>
            <button
              className={`nav-lang-item ${lang === 'ru' ? 'lang-active' : ''}`}
              onClick={() => setLang('ru')}>
              RU
            </button>
          </div>
        </div>
      </nav>
      {/* Nav mobile ================== */}
    </header>
  );
};

export default Header;
