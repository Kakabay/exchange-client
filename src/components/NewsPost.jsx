// Icons
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const NewsPost = ({ title, shortDes, date, image, setPostId, id }) => {
  return (
    <div className="news-post">
      <div className="news-post-img">
        <img src={image} alt="news-image" />
      </div>
      <div className="news-post-content">
        <h3 className="news-post-date">{date}</h3>
        <h2 className="news-post-title">{title}</h2>
        <p className="news-post-text">{shortDes}</p>
      </div>
      <Link
        className="news-post-link"
        to={`/post/${id}`}
        onClick={() => setPostId(id)}
      >
        <img src={arrow} alt="arrow" />
        <h3>Читать полностью </h3>
      </Link>
    </div>
  );
};

export default NewsPost;
