// Modules
import { Link } from 'react-router-dom';

// Icons
import logo from '../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-top">
        <div className="container">
          <div className="nav-top-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
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
    </header>
  );
};

export default Header;
