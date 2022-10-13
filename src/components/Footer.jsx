// Modules
import { Link } from 'react-router-dom';
// Components
import SectionTitle from './SectionTitle';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrapper">
            <SectionTitle title="Контакты" />
            <div className="footer-top-content">
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">Телефон:</h3>
                <h4 className="footer-top-item-text">+993 12 44-60-15</h4>
              </div>
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">Время работы:</h3>
                <h4 className="footer-top-item-text">Понедельник - пятница: с 9-00 по 18-00</h4>
              </div>
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">Email:</h3>
                <Link to={'/'} className="footer-top-item-text">
                  info@exchange.gov.tm
                </Link>
                <Link to={'/'} className="footer-top-item-text">
                  broker@exchange.gov.tm
                </Link>
              </div>
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">Приемные дни:</h3>
                <h4 className="footer-top-item-text">Понедельник - четверг: с 9-00 по 17-00</h4>
                <h4 className="footer-top-item-text">Пятница: с 9-00 по 13-00</h4>
              </div>
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">Адресс::</h3>
                <h4 className="footer-top-item-text">
                  744000, Туркменистан г. Ашхабат, Арчабиль шаелы 52
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <ul className="footer-nav-list">
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">ГТСБТ</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Нормативная база</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Биржевые торги</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Мильтимедия</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Финансовый мониторинг</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Новости</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Регистрация договоров</Link>
              </li>
              <li className="footer-nav-list-item">
                <Link className="footer-nav-list-link">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
