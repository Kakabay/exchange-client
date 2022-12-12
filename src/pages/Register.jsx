// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import DocumentLink from '../components/DocumentLink';

export const Register = () => {
  const [docsData, setDocsData] = useState();

  useEffect(() => {
    // Documents fetch
    const DocumentsApi = new Api('http://tmex.gov.tm:8765/api/documents', docsData, setDocsData);
    DocumentsApi.get({ 'X-Localization': 'en' });

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Регистрация договоров" />

          <div className="sub-page-content-wrapper">
            <div className="sub-page-list-wrapper">
              <h2 className="sub-page-title">
                Регистрация договоров на государственной товарно-сырьевой бирже Туркменистана
                осуществляется по приведенной схеме:
              </h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">Прием документов с 9.00 до 17.00.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">Отдел анализа и рынка цен.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">Управление права и кадров.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">Регистрационный отдел.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">5</div>
                  <h3 className="sub-page-list-item-text">Отдел взаиморасчета.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">6</div>
                  <h3 className="sub-page-list-item-text">Передача на подпись руководителям.</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-page-text-wrapper">
            <p>
              Также участники биржи могут отслеживать процесс регистрации контрактов онлайн на сайте
              с помощью Личного кабинета. Для этого достаточно зарегистрироваться в системе, перейти
              в соответствующий раздел и следовать дальнейшим указаниям. Работа на сайте идентична с
              работой через терминалы в здании биржи.
            </p>
          </div>

          <div className="sub-page-content-wrapper">
            <div className="sub-page-list-wrapper">
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

          <div className="sub-page-title-text">
            <h2 className="sub-page-title">Документы для скачивания</h2>
            <div className="documents-wrapper">
              <div className="documents-links-wrapper">
                {
                  docsData
                    ? docsData.data.map((doc) => {
                        return <DocumentLink key={doc.id} title={doc.title} link={doc.file} />;
                      })
                    : '' //loader
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
