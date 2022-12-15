// Modules
import { useState, useEffect } from 'react';
// Functions
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import DocumentLink from '../components/DocumentLink';

export const Normative = ({ lang }) => {
  const [docsData, setDocsData] = useState();

  useEffect(() => {
    // Documents fetch
    const DocumentsApi = new Api(
      'http://tmex.gov.tm:8765/api/documents',
      docsData,
      setDocsData,
    ).get({ 'X-Localization': lang });

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Documents fetch
    const DocumentsApi = new Api(
      'http://tmex.gov.tm:8765/api/documents',
      docsData,
      setDocsData,
    ).get({ 'X-Localization': lang });
  }, [lang]);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Нормативная база" />

          <div className="sub-page-content-wrapper">
            <div className="sub-page-text-wrapper">
              <p>
                Арбитражная комиссия в своей деятельности руководствуется Конституцией, законами,
                актами Президента, положением Биржи, правилами биржевой торговли и другими
                нормативно-правовыми актами.
              </p>
            </div>

            <div className="sub-page-list-wrapper">
              <h2 className="sub-page-title">В компетенцию Арбитражной комиссии входит:</h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">
                    Аннулирование действия сделок, заключенных на биржевых торгах.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">
                    Аннулирование зарегистрированных и невостребованных на Бирже договоров.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">
                    Рассмотрение споров по биржевым сделкам и вопросам биржевой торговли.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">
                    Рассмотрение споров по договорам, при их заключении, внесении изменений и
                    расторжении.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">5</div>
                  <h3 className="sub-page-list-item-text">
                    Комиссия вправе изменить, отменить и восстановить принятое решение.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">6</div>
                  <h3 className="sub-page-list-item-text">
                    Рассмотрение нарушений, допущенных участниками биржевой торговли.
                  </h3>
                </div>
              </div>
            </div>

            <div className="sub-page-text-wrapper">
              <p>Инструкция о порядке консульской легализации</p>
              <p>
                Консульская легализация заключается в установлении и засвидетельствовании
                подлинности подписей на ъдокументах и актах, а также соответствия их законам
                государства пребывания консула путем совершения легализационной надписи или
                проставления легализационного штампа на государственном и английском языках.
              </p>
            </div>

            <div className="sub-page-title-text">
              <h2 className="sub-page-title">Документы для скачивания</h2>
              <div className="documents-wrapper">
                <div className="documents-links-wrapper">
                  {
                    docsData
                      ? docsData.data.map((doc) => {
                          return doc.page === 'Нормативная база' ? (
                            <DocumentLink key={doc.id} title={doc.title} link={doc.file} />
                          ) : null;
                        })
                      : '' //loader
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Normative;
