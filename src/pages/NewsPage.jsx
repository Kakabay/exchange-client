import React from 'react';
import { useState, useEffect } from 'react';
// Functions
import { Api } from '../helpers/api';
import { dateReverse } from '../helpers/functions';
// Components
import SectionTitle from '../components/SectionTitle';
import NewsPost from '../components/NewsPost';

const NewsPage = ({ lang, setPostId }) => {
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    // News fetch
    const PostsData = new Api('http://tmex.gov.tm:8765/api/news', postsData, setPostsData).get({
      'X-Localization': lang,
    });
  }, []);

  useEffect(() => {
    // News fetch
    const PostsData = new Api('http://tmex.gov.tm:8765/api/news', postsData, setPostsData).get({
      'X-Localization': lang,
    });
  }, [lang]);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper sub-page-full">
          <SectionTitle title="Новости" />
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
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
