// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Conmponents
import SectionTitle from '../components/SectionTitle';
import DocumentLink from '../components/DocumentLink';

const Finance = ({ lang }) => {
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
          <SectionTitle title="Финансовый мониторинг" />
          <div className="sub-page-content-wrapper">
            <div className="sub-page-text-wrapper">
              <p>
                В целях организации противодействия легализации доходов, полученных от преступной
                деятельности, и финансированию терроризма, на бирже установлены Правила, которые
                определяют основные цели и задачи, требования внутреннего контроля. Также биржей
                назначается лицо, ответственное за соблюдение этих правил.
              </p>
              <p>
                Сотрудник комиссии, на основании полученной информации от клиента, тщательно
                проверяет ее с учетом видов деятельности и операций клиента, оценивает и присваивает
                соответствующий уровень риска, а также вносит ее в АБС.
              </p>
            </div>
            <div className="sub-page-title-text">
              <h2 className="sub-page-title">Регистрация в отделе фин. мониторинга</h2>
              <div className="sub-page-text-wrapper">
                <p>
                  Подать документы на легализацию юридического лица или предпринимателя можно
                  онлайн. Личный кабинет пользователя позволяет внести данные и загрузить документы,
                  скачать бланки и образцы заявлений, вести общение с администраторами биржи,
                  дополнять пакет документов, если будет такая необходимость. Фактически, вся работа
                  с биржей становится автоматизированной с помощью Интернета.
                </p>
                <p>Чтобы воспользоваться сервисом – пройдите регистрацию в Личном кабинете.</p>
              </div>
            </div>

            <div className="sub-page-title-text">
              <h2 className="sub-page-title">Документы для скачивания</h2>
              <div className="documents-wrapper">
                <div className="documents-links-wrapper">
                  {
                    docsData
                      ? docsData.data.map((doc) => {
                          return doc.page === 'Финансовый мониторинг' ? (
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

export default Finance;
