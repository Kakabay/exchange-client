import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
import { dateReverse } from '../helpers/functions';
// Images
import postPageImg from '../assets/images/post-img.png';
import LatestNew from '../components/LatestNew';

const NewsPostPage = () => {
  const [newsPageData, setNewsPageData] = useState();

  useEffect(() => {
    const NewsPageApi = new Api('http://tmex.gov.tm:8765/api/news', newsPageData, setNewsPageData);
    NewsPageApi.get({ 'X-localization': 'en' });
  }, []);

  return (
    <div className="container">
      <div className="post-page-wrapper">
        <main>
          <div className="post-page-main-wrapper">
            <div className="post-page-header">
              <h1 className="post-page-title">
                Türkiýeden we Owganystandan gelen telekeçiler 4,5 müň tonnadan gowrak STG satyn
                aldylar
              </h1>
              <h2 className="post-page-main-date">18.08.2022</h2>
            </div>
            <div className="post-page-img">
              <img src={postPageImg} alt="img" />
            </div>
            <div className="post-page-text">
              <p className="post-page-text-item">
                Государственная товарно-сырьевая биржа Туркменистана была создана Указом Президента
                Туркменистана от 29 июля 1994 года и является важнейшим экономическим институтом
                страны. Биржа выполняет функцию главного органа государственного регулирования
                экспортно-импортных операций. Отлаженный механизм функционирования позволяет ей
                успешно интегрироваться в международную экономическую систему.
              </p>
              <p className="post-page-text-item">
                Спектр деятельности ГТСБТ чрезвычайно широк – она является универсальной биржей,
                принимая и реализуя через торги различные товарно-материальные ценности (за
                исключением объектов интеллектуальной собственности), произведения искусства и
                недвижимость.
              </p>
              <p className="post-page-text-item">
                Спектр деятельности ГТСБТ чрезвычайно широк – она является универсальной биржей,
                принимая и реализуя через торги различные товарно-материальные ценности (за
                исключением объектов интеллектуальной собственности), произведения искусства и
                недвижимость.
              </p>
            </div>
          </div>
        </main>
        <aside>
          <div className="post-page-latest-wrapper">
            <h2 className="post-page-latest-title">Последние новости</h2>
            <div className="post-page-latest-news">
              {newsPageData
                ? newsPageData.data.map((news, index) => {
                    return index <= 6 ? (
                      <LatestNew
                        title={news.title}
                        date={dateReverse(news.date)
                          .split(' ')[0]
                          .replace('-', '.')
                          .replace('-', '.')}
                      />
                    ) : null;
                  })
                : null}
              {/* <LatestNew />
              <LatestNew />
              <LatestNew />
              <LatestNew /> */}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsPostPage;
