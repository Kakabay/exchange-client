// Modules
import { Link } from 'react-router-dom';
// Components
import SectionTitle from './SectionTitle';

const Footer = ({ lang }) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrapper">
            <SectionTitle title="Контакты" />
            <div className="footer-top-content">
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">
                  {lang === 'ru'
                    ? 'Телефон:'
                    : lang === 'tm'
                    ? 'Telefon belgisi'
                    : lang === 'en'
                    ? 'Phone'
                    : null}
                </h3>
                <h4 className="footer-top-item-text">+993 12 44-60-15</h4>
              </div>
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">
                  {lang === 'ru'
                    ? 'Время работы:'
                    : lang === 'tm'
                    ? 'Iş wagty'
                    : lang === 'en'
                    ? 'Working time'
                    : null}
                </h3>
                <h4 className="footer-top-item-text">
                  {lang === 'ru'
                    ? 'Понедельник - пятница: 9:00 - 18:00'
                    : lang === 'tm'
                    ? 'Duşenbe - anna: 9:00 - 18:00'
                    : lang === 'en'
                    ? 'Monday - friday: 9:00 - 18:00'
                    : null}
                </h4>
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
                <h3 className="footer-top-item-title">
                  {lang === 'ru'
                    ? 'Приемные дни:'
                    : lang === 'tm'
                    ? 'Kabul ediş günleri'
                    : lang === 'en'
                    ? 'Reception days'
                    : null}
                </h3>
                <h4 className="footer-top-item-text">
                  {lang === 'ru'
                    ? 'Понедельник - четверг: 9:00 - 17:00'
                    : lang === 'tm'
                    ? 'Duşenbe - penşenbe: 9:00 - 17:00'
                    : lang === 'en'
                    ? 'Monday - thursday: 9:00 - 17:00'
                    : null}
                </h4>
                <h4 className="footer-top-item-text">
                  {lang === 'ru'
                    ? 'Пятница: 9:00 - 13:00'
                    : lang === 'tm'
                    ? 'Anna: 9:00 - 17:00'
                    : lang === 'en'
                    ? 'Friday: 9:00 - 17:00'
                    : null}
                </h4>
              </div>
              <div className="footer-top-item">
                <h3 className="footer-top-item-title">
                  {lang === 'ru'
                    ? 'Адрес:'
                    : lang === 'tm'
                    ? 'Salgy'
                    : lang === 'en'
                    ? 'Adress'
                    : null}
                </h3>
                <h4 className="footer-top-item-text">
                  {lang === 'ru'
                    ? '744000, Туркменистан г. Ашхабат, Арчабиль шаелы 52'
                    : lang === 'tm'
                    ? '744000, Türkmenistan ş. Aşgabat, Arçabil şaýoly 52'
                    : lang === 'en'
                    ? '744000, Turkmenistan c. Ashgabat, Archabil shayoly 52'
                    : null}
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
                <Link to={'/gtsbt'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'ГТСБТ'
                    : lang === 'tm'
                    ? 'TDHÇMB'
                    : lang === 'en'
                    ? 'SCRMET'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/norm'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Нормативная база'
                    : lang === 'tm'
                    ? 'Kanunçylyk'
                    : lang === 'en'
                    ? 'Normative base'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/trade'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Биржевые торги'
                    : lang === 'tm'
                    ? 'Birža söwdalary'
                    : lang === 'en'
                    ? 'Exchange auctions'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/multimedia'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Мультимедиа'
                    : lang === 'tm'
                    ? 'Multimediýa'
                    : lang === 'en'
                    ? 'Multimedia'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/fin'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Финансовый мониторинг'
                    : lang === 'tm'
                    ? 'Maliýe gözegçiligi'
                    : lang === 'en'
                    ? 'Financial monitoring'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/news'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Новости'
                    : lang === 'tm'
                    ? 'Habarlar'
                    : lang === 'en'
                    ? 'News'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/register'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Регистрация договоров'
                    : lang === 'tm'
                    ? 'Şertnamalary hasaba almak'
                    : lang === 'en'
                    ? 'Contracts registration'
                    : null}
                </Link>
              </li>
              <li className="footer-nav-list-item">
                <Link to={'/contacts'} className="footer-nav-list-link">
                  {lang === 'ru'
                    ? 'Контакты'
                    : lang === 'tm'
                    ? 'Salgymyz'
                    : lang === 'en'
                    ? 'Contacts'
                    : null}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
