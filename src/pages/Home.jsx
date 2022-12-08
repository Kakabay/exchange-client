// Modules
import { useEffect, useState } from 'react';
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
import { Api } from '../helpers/api';

const Home = () => {
  // Sets
  const [docsData, setDocsData] = useState();
  const [newsData, setNewsData] = useState();
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    // Video fetch
    const VideoApi = new Api('http://tmex.gov.tm:8765/api/video', videoData, setVideoData);
    VideoApi.get();

    // News fetch
    const NewsApi = new Api('http://tmex.gov.tm:8765/api/news', newsData, setNewsData);
    NewsApi.get({ 'X-Localization': 'en' });

    // Documents fetch
    const DocumentsApi = new Api('http://tmex.gov.tm:8765/api/documents', docsData, setDocsData);
    DocumentsApi.get({ 'X-Localization': 'en' });

    // Scroll to top
    // window.scrollTo(0, 0);
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
              {videoData ? <VideoPlayer videoUrl={videoData.data.video} /> : null}
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
              {
                newsData
                  ? newsData.data.map((news, index) => {
                      if (index <= 2) {
                        return (
                          <NewsPost
                            key={news.id}
                            title={news.title}
                            shortDes={news.short_description}
                            date={news.date}
                            image={news.image}
                          />
                        );
                      } else {
                        return null;
                      }
                    })
                  : '' //loader
              }
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
              {
                docsData
                  ? docsData.data.map((doc) => {
                      return <DocumentLink key={doc.id} title={doc.title} link={doc.file} />;
                    })
                  : '' //loader
              }
            </div>
          </div>
        </div>
      </section>
      {/* Documents section ./========= */}
    </main>
  );
};

export default Home;
