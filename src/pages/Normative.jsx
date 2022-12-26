// Modules
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Functions
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import DocumentSection from '../components/DocumentSection';

export const Normative = ({ lang }) => {
  const [docsCategoryData, setDocsCategoryData] = useState();

  useEffect(() => {
    // Documents fetch
    const DocumentsCategotyApi = new Api(
      'http://tmex.gov.tm:8765/api/document/categories',
      docsCategoryData,
      setDocsCategoryData,
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
              <SectionTitle title="Нормативная база" />

              <div className="sub-page-content-wrapper">
                <div className="sub-page-text-wrapper">
                  <p>
                    Арбитражная комиссия в своей деятельности руководствуется Конституцией,
                    законами, актами Президента, положением Биржи, правилами биржевой торговли и
                    другими нормативно-правовыми актами.
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
              </div>
            </>
          ) : null}

          {lang === 'tm' ? (
            <>
              <SectionTitle title="KADALAŞDYRYLAN TOPLUM" />

              <div className="sub-page-content-wrapper">
                <div className="sub-page-text-wrapper">
                  <p>
                    Arbitraž geňeşi öz işinde Türkmenistanyň Konstitusiýasy, Türkmenistanyň
                    Prezidentiniň Permanlary, Kararlary, Biržanyň düzgünleri, alyş-çalyş söwdasynyň
                    kadalary we beýleki kadalaşdyryjy hukuk namalaryna esaslanýar.
                  </p>
                </div>

                <div className="sub-page-list-wrapper">
                  <h2 className="sub-page-title">
                    Arbitraž geňeşiniň ygtyýarlygy şulary öz içine alýar:
                  </h2>
                  <div className="sub-page-list">
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">1</div>
                      <h3 className="sub-page-list-item-text">
                        Birža söwdalaşyklarynda baglanyşylan ylalaşyklaryň täsiriniň ýatyrylmagy.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">2</div>
                      <h3 className="sub-page-list-item-text">
                        Biržada hasaba alnan we talap edilmedik şertnamalaryň ýatyrylmagy.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">3</div>
                      <h3 className="sub-page-list-item-text">
                        Birža amallary we alyş-çalyş söwdasy baradaky jedellere garamak.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">4</div>
                      <h3 className="sub-page-list-item-text">
                        Jedeller baglanyşylanda, üýtgedilende we ýatyrylanda şertnamalara garamak.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">5</div>
                      <h3 className="sub-page-list-item-text">
                        Geňeşiň kabul edilen karary üýtgetmäge, ýatyrmaga we dikeltmäge hukugy bar.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">6</div>
                      <h3 className="sub-page-list-item-text">
                        Birža söwdasyna gatnaşyjylar tarapyndan ýol berlen düzgün bozulmalaryna
                        garamak.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="sub-page-text-wrapper">
                  <p>Konsullygy kanunlaşdyrmagyň tertibi boýunça görkezmeler</p>
                  <p>
                    Konsullygyň kanunlaşdyrylmagy resminamalara we hereketlere gollaryň dogrudygyny
                    kesgitlemekden, şeýle hem kanunlaşdyrmak ýazgysyny ýazmak ýa-da döwlet we iňlis
                    dillerinde kanunlaşdyryş möhürini goýmak arkaly konsulyň kabul edýän döwletiniň
                    kanunlaryna laýyk gelmegini kesgitlemekden ybaratdyr.
                  </p>
                </div>
              </div>
            </>
          ) : null}

          {lang === 'en' ? (
            <>
              <SectionTitle title="Regulatory framework" />

              <div className="sub-page-content-wrapper">
                <div className="sub-page-text-wrapper">
                  <p>
                    The Arbitration Commission in its activities is guided by the Constitution,
                    laws, acts of the President, the regulations of the Exchange, the rules of
                    exchange trading and other regulatory legal acts.
                  </p>
                </div>

                <div className="sub-page-list-wrapper">
                  <h2 className="sub-page-title">
                    The competence of the Arbitration Commission includes:
                  </h2>
                  <div className="sub-page-list">
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">1</div>
                      <h3 className="sub-page-list-item-text">
                        Cancellation of transactions concluded at exchange trading.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">2</div>
                      <h3 className="sub-page-list-item-text">
                        Cancellation of contracts registered and unclaimed on the Exchange.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">3</div>
                      <h3 className="sub-page-list-item-text">
                        Consideration of disputes on exchange transactions and issues of exchange
                        trading.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">4</div>
                      <h3 className="sub-page-list-item-text">
                        Consideration of disputes under contracts, when they are concluded, amended
                        and terminated.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">5</div>
                      <h3 className="sub-page-list-item-text">
                        The Commission has the right to change, cancel and restore the adopted
                        decision.
                      </h3>
                    </div>
                    <div className="sub-page-list-item">
                      <div className="sub-page-list-num">6</div>
                      <h3 className="sub-page-list-item-text">
                        Consideration of violations committed by participants of exchange trading.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="sub-page-text-wrapper">
                  <p>Instructions on the procedure of consular legalization</p>
                  <p>
                    Consular legalization consists in establishing and certifying the authenticity
                    of signatures on legal documents and acts, as well as their compliance with the
                    laws of the consul's state of residence by making a legalization inscription or
                    affixing a legalization stamp in the state and English languages.
                  </p>
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
                : lang === 'en'
                ? 'Documents for download'
                : null}
            </h2>
            {docsCategoryData
              ? docsCategoryData.data.map((category) => {
                  return category.title != '-' ? (
                    <DocumentSection
                      key={uuidv4()}
                      id={category.id}
                      lang={lang}
                      title={category.title}
                    />
                  ) : null;
                })
              : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Normative;
