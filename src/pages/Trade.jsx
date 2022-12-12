// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import DocumentLink from '../components/DocumentLink';

const Trade = ({ lang }) => {
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

            <div className="sub-page-list-wrapper">
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

            <div className="sub-page-list-wrapper">
              <h2 className="sub-page-title">Порядок оформления брокерского места</h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">
                    Пройти процедуру регистрации в отделе Финансового Мониторинга.
                  </h3>
                </div>

                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <div className="sub-page-list-item-content">
                    <h3 className="sub-page-list-item-text">Предоставить пакет документов:</h3>
                    <ul className="sub-page-list-item-list">
                      <li className="sub-page-list-item-list-item">
                        Письмо-обращение на имя представителя ГТСБТ о регистрации и покупки
                        брокерского места
                      </li>
                      <li className="sub-page-list-item-list-item">
                        Доверенность на представителя (брокера) с оригиналом печати и подписи
                        руководителя компании;
                      </li>
                      <li className="sub-page-list-item-list-item">
                        Копия генеральной доверенности (легализованной)
                      </li>
                      <li className="sub-page-list-item-list-item">
                        Копия паспорта представителя (брокера) и руководителя компании;
                      </li>
                      <li className="sub-page-list-item-list-item">
                        Заполненный бланк банковских реквизитов, заверенный оригинальной печатью и
                        подписью руководителя компании;
                      </li>
                      <li className="sub-page-list-item-list-item">
                        Копию учредительных документов (устав, реестр);
                      </li>
                      <li className="sub-page-list-item-list-item">Одна фотография брокера 3x4;</li>
                      <li className="sub-page-list-item-list-item">
                        Заполненный бланк "Обязательство", заверенный печатью и подписью
                        руководителя компании.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <div className="sub-page-list-item-content">
                    <h3 className="sub-page-list-item-text">
                      Получить в отделе «Взаиморасчетов» ГТСБТ счета и оплатить:
                    </h3>
                    <h3 className="sub-page-list-item-text">Для нерезидентов:</h3>
                    <ul className="sub-page-list-item-list">
                      <li className="sub-page-list-item-list-item">
                        Стоимость брокерского места на лёгкую промышленность сроком на 1 год
                        составляет 5000 долларов США. Депозит – 6 000 долларов США.
                      </li>
                      <li className="sub-page-list-item-list-item">
                        Стоимость брокерского места на нефтяную промышленность сроком на 1 год
                        составляет 10 000 долларов США. Депозит – 50 000 долларов США.
                      </li>
                    </ul>
                    <h3 className="sub-page-list-item-text">Для резидентов:</h3>
                    <ul className="sub-page-list-item-list">
                      <li className="sub-page-list-item-list-item">
                        Стоимость брокерского места сроком на 1 год составляет 10 000 манат.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="sub-page-list-wrapper">
              <h2 className="sub-page-title">Основания для прекращения деятельности брокера: </h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">
                    Заявление о закрытии брокерского места.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">
                    Не уплата годовой оплаты за брокерское место в установленные сроки.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">
                    Отказ от уплаты годовой оплаты за брокерское место.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">Решение Арбитражной комиссии Биржи.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">5</div>
                  <h3 className="sub-page-list-item-text">
                    Прекращение или ликвидация деятельности юридического лица.
                  </h3>
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
      </div>
    </main>
  );
};

export default Trade;
