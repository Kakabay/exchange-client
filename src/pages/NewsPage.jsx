import React from 'react';
// Components
import SectionTitle from '../components/SectionTitle';
import NewsPost from '../components/NewsPost';

const NewsPage = () => {
  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Новости" />
          <div className="news-page-wrapper">
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
            <NewsPost />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
