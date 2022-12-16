// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import DocumentLink from '../components/DocumentLink';

export const Register = ({ lang }) => {
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
  }, [lang]);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          {lang === 'ru' ? (
            <>
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
                      <h3 className="sub-page-list-item-text">
                        Передача на подпись руководителям.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-page-text-wrapper">
                <p>
                  Также участники биржи могут отслеживать процесс регистрации контрактов онлайн на
                  сайте с помощью Личного кабинета. Для этого достаточно зарегистрироваться в
                  системе, перейти в соответствующий раздел и следовать дальнейшим указаниям. Работа
                  на сайте идентична с работой через терминалы в здании биржи.
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
                        Документы, подтверждающие право заниматься предпринимательской
                        деятельностью.
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
            </>
          ) : null}

          {lang === 'tm' ? (
            <>
              <SectionTitle title="Şertnamalary hasaba almak" />

              <div className="sub-page-content-wrapper">
                <div className="sub-page-list-wrapper">
                  <h2 className="sub-page-title">
                    Türkmenistanyň Döwlet haryt we çig mal biržasynda şertnamalary hasaba alyş
                    aşakdaky tertibe laýyklykda amala aşyrylýar:
                  </h2>
                  <div className="sub-page-list">
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">1</div>
                      <h3 className="sub-page-list-item-text">
                        9:00-dan 17:00-a çenli resminamalary kabul etmek.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">2</div>
                      <h3 className="sub-page-list-item-text">
                        Derňew we bahalary anyklamak bölümi.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">3</div>
                      <h3 className="sub-page-list-item-text">Hukuk we işgärleri dolandyrmak.</h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">4</div>
                      <h3 className="sub-page-list-item-text">Hasaba alyş bölümi.</h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">5</div>
                      <h3 className="sub-page-list-item-text">Özara hasaplaşyk bölümi.</h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">6</div>
                      <h3 className="sub-page-list-item-text">
                        Gol çekmek üçin dolandyryjylara geçirmek.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-page-text-wrapper">
                <p>
                  Şeýle hem, birža gatnaşyjylary Şahsy otagy ulanyp, internet sahypalarynda
                  şertnamalary hasaba almak prosesini yzarlap bilerler. Munuň üçin diňe ulgamda
                  hasaba alynyp, degişli bölüme geçmeli we indiki görkezmelere eýermeli. Internet
                  sahypasynda işlemek, alyş-çalyş binasyndaky terminallarynda işlemek bilen deňdir.
                </p>
              </div>

              <div className="sub-page-content-wrapper">
                <div className="sub-page-list-wrapper">
                  <h2 className="sub-page-title">
                    Harytlary alyş-çalyş auksionlaryna ýerleşdirmek üçin zerur resminamalaryň
                    sanawy:
                  </h2>
                  <div className="sub-page-list">
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">1</div>
                      <h3 className="sub-page-list-item-text">
                        Harytlary alyş-çalyş auksionlaryna goýmak üçin rugsat soramak bilen ýüz
                        tutma haty.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">2</div>
                      <h3 className="sub-page-list-item-text">
                        Harytlary satmak üçin bellenen görnüşde doldurylan hat.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">3</div>
                      <h3 className="sub-page-list-item-text">
                        TDHÇMB-iň talaplaryna laýyklykda düzülen harytlaryň spesifikasiýasy.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">4</div>
                      <h3 className="sub-page-list-item-text">
                        Telekeçilik işi bilen meşgullanmak hukugyny tassyklaýan resminamalar.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">5</div>
                      <h3 className="sub-page-list-item-text">
                        Harytlaryň gelip çykyşyny tassyklaýan resminamalar.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className="sub-page-title-text">
            <h2 className="sub-page-title">
              {lang === 'ru'
                ? 'Документы для скачивания'
                : lang === 'tm'
                ? 'Göçürip almak üçin resminamalar'
                : null}
            </h2>
            <div className="documents-wrapper">
              <div className="documents-links-wrapper">
                {
                  docsData
                    ? docsData.data.map((doc) => {
                        return doc.page === 'Регистрация договоров' && doc.title != '-' ? (
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
    </main>
  );
};

export default Register;
