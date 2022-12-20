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
import { dateReverse } from '../helpers/functions';

const Home = ({ lang, setPostId }) => {
  // Sets
  const [newsData, setNewsData] = useState();
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    // Video fetch
    // const VideoApi = new Api('http://tmex.gov.tm:8765/api/video', videoData, setVideoData).get();

    // News fetch
    const NewsApi = new Api('http://tmex.gov.tm:8765/api/news', newsData, setNewsData).get({
      'X-Localization': lang,
    });

    // Scroll to top
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <main className="home-main">
      {/* Hero section */}
      <Hero lang={lang} />
      {/* Hero section ./ =========== */}

      {/* About section */}
      <section className="about">
        <div className="container">
          <div className="about-wrapper">
            {lang === 'ru' ? (
              <div className="about-left">
                <SectionTitle title="О ГТСБТ" />
                <div className="about-text-wrapper">
                  <p className="about-text">
                    Государственная товарно-сырьевая биржа Туркменистана была создана Указом
                    Президента Туркменистана от 29 июля 1994 года и является важнейшим экономическим
                    институтом страны. Биржа выполняет функцию главного органа государственного
                    регулирования экспортно-импортных операций. Отлаженный механизм функционирования
                    позволяет ей успешно интегрироваться в международную экономическую систему.
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
            ) : null}

            {lang === 'tm' ? (
              <div className="about-left">
                <SectionTitle title="TDHÇMB BARADA" />
                <div className="about-text-wrapper">
                  <p className="about-text">
                    Türkmenistanyň Döwlet haryt we çig mal biržasy (TDHÇMB) Türkmenistanyň
                    Prezidentiniň 1994-nji ýylyň 29-njy iýulyndaky Karary bilen döredildi we ýurduň
                    iň möhüm ykdysady instituty bolup durýar. Birža eksport we import amallaryny
                    amala aşyrmakda döwleti düzgünleşdirýän esasy edaranyň wezipesini ýerine
                    ýetirýär. Sazlaşykly döredilen mehanizm halkara ykdysady ulgamyna üstünlikli
                    birleşmäge mümkinçilik berýär. TDHÇMB-nyň işiniň gerimi örän giňdir – dürli
                    haryt we maddy baýlyklary (intellektual eýeçiligi hasaba almazdan), sungat
                    eserlerini we gozgalmaýan emläkleri kabul edip satýan köptaraplaýyn biržasydyr.
                  </p>
                </div>
                <div className="about-link-wrapper">
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">Resminamalary onlaýn tabşyrmak</h3>
                  </Link>
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">
                      Gol çekilen şertnamalaryň ýagdaýlaryny barlamak
                    </h3>
                  </Link>
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">
                      Import bahalaryny şu ýerden tapyp bilersiňiz
                    </h3>
                  </Link>
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">
                      Biržanyň agzalary üçin nyrhlary we tölegleri görüň
                    </h3>
                  </Link>
                </div>
              </div>
            ) : null}

            {lang === 'en' ? (
              <div className="about-left">
                <SectionTitle title="About the SCRMET" />
                <div className="about-text-wrapper">
                  <p className="about-text">
                    The State Commodity and Raw Materials Exchange of Turkmenistan (SCRMET) was
                    established by the Decree of the President of Turkmenistan on July 29, 1994 and
                    is the most important economic institution of the country. The Exchange
                    functions as the main body of state regulation of export-import operations. Its
                    smoothly functioning mechanism enables it to successfully integrate into the
                    international economic system.
                  </p>
                </div>
                <div className="about-link-wrapper">
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">Apply documents online</h3>
                  </Link>
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">Check the status of signed contracts</h3>
                  </Link>
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">You can find import prices here</h3>
                  </Link>
                  <Link to={'/'} className="about-link">
                    <img src={arrow} alt="link" className="about-link-text" />
                    <h3 className="about-link-text">View rates and fees for exchange members</h3>
                  </Link>
                </div>
              </div>
            ) : null}

            <div className="about-right">
              {/* {videoData ? <VideoPlayer videoUrl={videoData.data.video} /> : null} */}
              <VideoPlayer videoUrl={'https://www.exchange.gov.tm/page/normative-base?lang=ru'} />
            </div>
          </div>
        </div>
      </section>
      {/* About section ./========= */}

      {/* Chart section */}
      <DataChart lang={lang} />
      {/* Chart section ./========= */}

      {/* News section ./========= */}
      <section className="news">
        <div className="container">
          <div className="news-wrapper">
            <SectionTitle
              title={`
            ${
              lang === 'ru' ? 'Новости' : lang === 'tm' ? 'Habarlar' : lang === 'en' ? 'News' : null
            }`}
            />
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
                            date={dateReverse(news.date)}
                            image={news.image}
                            id={news.id}
                            setPostId={setPostId}
                            lang={lang}
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
      {/* <section className="documents">
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
      </section> */}
      {/* Documents section ./========= */}
    </main>
  );
};

export default Home;
