import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Api } from "../helpers/api";
import { dateReverse } from "../helpers/functions";
// Images
// import postPageImg from "../assets/images/post-img.png";
import LatestNew from "../components/LatestNew";

const NewsPostPage = ({ lang, setPostId, postsData, setPostsData }) => {
  const { id } = useParams();
  const isFirstLoad = useRef(true);
  useEffect(() => {
    if (!postsData) {
      const NewsPageApi = new Api(
        "http://tmex.gov.tm:8765/api/news",
        postsData,
        setPostsData
      ).get({ "X-localization": lang });
    }
  }, [postsData]);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    const NewsPageApi = new Api(
      "http://tmex.gov.tm:8765/api/news",
      postsData,
      setPostsData
    ).get({ "X-localization": lang });
  }, [lang]);

  return (
    <div className="container">
      <div className="post-page-wrapper">
        <main>
          {postsData
            ? postsData.data.map((post) => {
                return post.id === parseInt(id) ? (
                  <div className="post-page-main-wrapper" key={post.id}>
                    <div className="post-page-header">
                      <h1 className="post-page-title">{post.title}</h1>
                      <h2 className="post-page-main-date">{post.data}</h2>
                    </div>
                    <div className="post-page-img">
                      <img src={post.image} alt="img" />
                    </div>
                    <div className="post-page-text">
                      <p className="post-page-text-item">{post.description}</p>
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
              {postsData
                ? postsData.data.map((post, index) => {
                    return index <= 6 ? (
                      <LatestNew
                        key={post.id}
                        title={post.title}
                        setPostId={setPostId}
                        id={post.id}
                        date={dateReverse(post.date)
                          .split(" ")[0]
                          .replace("-", ".")
                          .replace("-", ".")}
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
