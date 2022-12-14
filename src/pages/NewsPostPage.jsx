import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
import { dateReverse } from '../helpers/functions';
// Images
import postPageImg from '../assets/images/post-img.png';
import LatestNew from '../components/LatestNew';

const NewsPostPage = ({ postId, lang, setPostId }) => {
  const [newsPageData, setNewsPageData] = useState();

  useEffect(() => {
    const NewsPageApi = new Api('http://tmex.gov.tm:8765/api/news', newsPageData, setNewsPageData);
    NewsPageApi.get({ 'X-localization': lang });
    console.log(postId);
  }, []);

  useEffect(() => {
    const NewsPageApi = new Api('http://tmex.gov.tm:8765/api/news', newsPageData, setNewsPageData);
    NewsPageApi.get({ 'X-localization': lang });
  }, [lang]);

  return (
    <div className="container">
      <div className="post-page-wrapper">
        <main>
          {newsPageData
            ? newsPageData.data.map((news) => {
                return news.id === postId ? (
                  <div className="post-page-main-wrapper" key={news.id}>
                    <div className="post-page-header">
                      <h1 className="post-page-title">{news.title}</h1>
                      <h2 className="post-page-main-date">{news.data}</h2>
                    </div>
                    <div className="post-page-img">
                      <img src={news.image} alt="img" />
                    </div>
                    <div className="post-page-text">
                      <p className="post-page-text-item">{news.description}</p>
                    </div>
                  </div>
                ) : null;
              })
            : null}
        </main>
        <aside>
          <div className="post-page-latest-wrapper">
            <h2 className="post-page-latest-title">Последние новости</h2>
            <div className="post-page-latest-news">
              {newsPageData
                ? newsPageData.data.map((news, index) => {
                    return index <= 6 ? (
                      <LatestNew
                        key={news.id}
                        title={news.title}
                        setPostId={setPostId}
                        id={news.id}
                        date={dateReverse(news.date)
                          .split(' ')[0]
                          .replace('-', '.')
                          .replace('-', '.')}
                      />
                    ) : null;
                  })
                : null}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsPostPage;
