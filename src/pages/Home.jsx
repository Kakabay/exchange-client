// Modules
import { Link } from 'react-router-dom';
// Components
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Ticker from '../components/Ticker';
// Icons
import arrow from '../assets/icons/arrow.svg';
import NewsPost from '../components/NewsPost';
import DocumentLink from '../components/DocumentLink';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="home-main">
      <div>
        {/* Hero section */}
        <Hero />
        {/* Hero section ./ =========== */}

        {/* Ticker section */}
        <Ticker />
        {/* Ticker section ./ =========== */}
      </div>

      {/* About section */}
      <section className="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-left">
              <SectionTitle title="услуги биржы" />
              <div className="about-text-wrapper">
                <p className="about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisl, rhoncus aenean
                  dignissim velit vestibulum cras ultrices etiam. Iaculis vitae imperdiet eget
                  fringilla a egestas purus. Iaculis vitae imperdiet eget fringilla a egestas purus.
                </p>
                <p className="about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisl, rhoncus aenean
                  dignissim velit vestibulum cras ultrices etiam. Iaculis vitae imperdiet eget
                  fringilla a egestas purus. Iaculis vitae imperdiet eget fringilla a egestas purus.
                </p>
              </div>
              <div className="about-link-wrapper">
                <Link to={'/'} className="about-link">
                  <img src={arrow} alt="link" className="about-link-text" />
                  <h3 className="about-link-text">Подать документы онлайн</h3>
                </Link>
                <Link to={'/'} className="about-link">
                  <img src={arrow} alt="link" className="about-link-text" />
                  <h3 className="about-link-text">Проверить статус подписания контрактов</h3>
                </Link>
                <Link to={'/'} className="about-link">
                  <img src={arrow} alt="link" className="about-link-text" />
                  <h3 className="about-link-text">Узнать импортные цены можно здесь</h3>
                </Link>
                <Link to={'/'} className="about-link">
                  <img src={arrow} alt="link" className="about-link-text" />
                  <h3 className="about-link-text">
                    Просмотреть тарифы и сборы для участников биржы
                  </h3>
                </Link>
              </div>
            </div>
            <div className="about-right"></div>
          </div>
        </div>
      </section>
      {/* About section ./========= */}

      {/* News section ./========= */}
      <section className="news">
        <div className="container">
          <div className="news-wrapper">
            <SectionTitle title="Новости" />
            <div className="news-post-wrapper">
              <NewsPost />
              <NewsPost />
              <NewsPost />
            </div>
          </div>
        </div>
      </section>
      {/* News section ./========= */}

      {/* Documents section ./========= */}
      <section className="documents">
        <div className="container">
          <div className="documents-wrapper">
            <SectionTitle title="Документы для скачивания" />
            <div className="documents-links-wrapper">
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
              <DocumentLink title="Внутрений контроль по противодействию леголизации доходов" />
            </div>
          </div>
        </div>
      </section>
      {/* Documents section ./========= */}

      {/* Footer section */}
      <Footer />
      {/* Footer section ./========= */}
    </main>
  );
};

export default Home;
