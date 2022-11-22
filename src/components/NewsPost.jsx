// Icons
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';
// Images
import news from '../assets/images/news.png';

const NewsPost = () => {
  return (
    <div className="news-post">
      <div className="news-post-img">
        <img src={news} alt="news-image" />
      </div>
      <div className="news-post-content">
        <h3 className="news-post-date">18.08.2022</h3>
        <h2 className="news-post-title">
          Предстовители Индии и Кыргыстана приобрели текстильную продукцию
        </h2>
        <p className="news-post-text">
          В среду 17 августа на торгах Государственной товарно-сырьевой биржи Туркменистана было
          заключено 7 сделок на общую сумму $1,4 млн и 9,7 туркменских манат.
        </p>
      </div>
      <Link className="news-post-link" to={'/post'}>
        <img src={arrow} alt="arrow" />
        <h3>Читать полностью </h3>
      </Link>
    </div>
  );
};

export default NewsPost;
