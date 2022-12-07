import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import NewsPost from '../components/NewsPost';

const NewsPage = () => {
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    // Table data fetch
    const PostsData = new Api('http://tmex.gov.tm:8765/api/news', postsData, setPostsData);
    PostsData.get();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
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
                      date={news.date}
                      image={news.image}
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
