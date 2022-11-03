// Modules
import { useEffect } from 'react';
// Components
import SectionTitle from '../components/SectionTitle';

const Trade = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Правила биржевой торговли" />

          <div className="sub-page-content-wrapper">
            <div className="sub-page-text-wrapper">
              <p>
                В соответствии с Законом Туркменистана «О товарно-сырьевых биржах», участниками
                биржевых торгов могут быть предприятия и организации всех форм собственности,
                граждане Туркменистана и других государств путем приобретения брокерского места или
                заключением контракта на обслуживание с брокерами биржи.
              </p>
            </div>

            <div className="sub-page-list">
              <h2 className="sub-page-title">
                Биржевые торги организуются на основании следующих принципов:
              </h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">
                    Гласность и публичность проведения биржевых торгов.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">
                    Свобода формирования цен на биржевых торгах.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">
                    Добровольность заключения биржевых сделок.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">
                    Равенство условий участия в биржевых торгах для участников биржевых торгов.
                  </h3>
                </div>
              </div>
            </div>

            <div className="sub-page-text-wrapper">
              <p>
                Чтобы принять участие в биржевых торгах, необходимо приобрести брокерское место. В
                качестве продавца или покупателя могут выступать физические и юридические лица
                Туркменистана и иностранных государств всех форм собственности.
              </p>
              <p>
                Лица, не приобретшие брокерское место, чтобы осуществлять операции купли-продажи
                товаров, могут заключить договор на оказание брокерских услуг с брокерами Биржи.
              </p>
            </div>

            <div className="sub-page-list">
              <h2 className="sub-page-title">
                Перечень необходимых документов для выставления товаров на биржевые торги:
              </h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">
                    Письмо-обращение с просьбой о разрешении выставить товар на биржевые торги.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">
                    Письмо-обращение о продаже товара, заполненное в установленной форме.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">
                    Спецификация товара, составленная в соответствии с требованиями ГТСБТ.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">
                    Документы, подтверждающие право заниматься предпринимательской деятельностью.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">5</div>
                  <h3 className="sub-page-list-item-text">
                    Документы, подтверждающие происхождение товара.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trade;
