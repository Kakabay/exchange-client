import React from 'react';
import { useState, useEffect } from 'react';
// Functions
import { Api } from '../helpers/api';
import { dateReverse } from '../helpers/functions';
// Components
import SectionTitle from '../components/SectionTitle';
import NewsPost from '../components/NewsPost';
// Icons
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';

const NewsPage = ({ lang, setPostId, postsData, setPostsData }) => {
  const [url, setUrl] = useState('https://tmex.gov.tm:8765/api/news');

  useEffect(() => {
    // News fetch
    const PostsData = new Api(url, postsData, setPostsData).get({
      'X-Localization': lang,
    });
  }, [lang, url]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, [url]);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper sub-page-full">
          <SectionTitle
            title={`${
              lang === 'ru' ? 'Новости' : lang === 'tm' ? 'Habarlar' : lang === 'en' ? 'News' : null
            }`}
          />
          <div className="news-page-wrapper">
            {postsData
              ? postsData.data.map((news) => {
                  return (
                    <NewsPost
                      key={news.id}
                      title={news.title}
                      shortDes={news.short_description}
                      description={news.description}
                      date={dateReverse(news.date)}
                      image={news.image}
                      id={news.id}
                      setPostId={setPostId}
                      lang={lang}
                    />
                  );
                })
              : null}
          </div>
          {postsData ? (
            <div className="pagination">
              <button
                disabled={!postsData.meta.pagination.links.previous}
                className={'arr-left pagination-arrow'}
                onClick={() => {
                  postsData
                    ? postsData.meta.pagination.links.previous
                      ? setUrl(postsData.meta.pagination.links.previous)
                      : null
                    : null;
                }}>
                <Arrow className="arr-pagination-svg" />
              </button>
              <div className="pagination-count">
                {postsData
                  ? `${postsData.meta.pagination.current_page} / ${postsData.meta.pagination.total_pages}`
                  : '1 / 1'}
              </div>
              <button
                disabled={!postsData.meta.pagination.links.next}
                className={'arr-right pagination-arrow'}
                onClick={() => {
                  postsData
                    ? postsData.meta.pagination.links.next
                      ? setUrl(postsData.meta.pagination.links.next)
                      : null
                    : null;
                }}>
                <Arrow className="arr-pagination-svg" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
