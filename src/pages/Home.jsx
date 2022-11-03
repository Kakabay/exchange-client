// Modules
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import NewsPost from '../components/NewsPost';
import DocumentLink from '../components/DocumentLink';
import VideoPlayer from '../components/VideoPlayer';
import DataChart from '../components/DataChart';
// Icons
import arrow from '../assets/icons/arrow.svg';

const Home = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-main">
      {/* Hero section */}
      <Hero />
      {/* Hero section ./ =========== */}

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
            <div className="about-right">
              <VideoPlayer videoUrl={''} />
            </div>
          </div>
        </div>
      </section>
      {/* About section ./========= */}

      {/* Chart section */}
      <DataChart />
      {/* Chart section ./========= */}

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
    </main>
  );
};

export default Home;
