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
      'https://tmex.gov.tm:8765/api/documents',
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
              <SectionTitle title="Финансовый мониторинг" />
              <div className="sub-page-content-wrapper">
                <div className="sub-page-text-wrapper">
                  <p>
                    В целях организации противодействия легализации доходов, полученных от
                    преступной деятельности, и финансированию терроризма, на бирже установлены
                    Правила, которые определяют основные цели и задачи, требования внутреннего
                    контроля. Также биржей назначается лицо, ответственное за соблюдение этих
                    правил.
                  </p>
                  <p>
                    Сотрудник комиссии, на основании полученной информации от клиента, тщательно
                    проверяет ее с учетом видов деятельности и операций клиента, оценивает и
                    присваивает соответствующий уровень риска, а также вносит ее в АБС.
                  </p>
                </div>
                <div className="sub-page-title-text">
                  <h2 className="sub-page-title">Регистрация в отделе фин. мониторинга</h2>
                  <div className="sub-page-text-wrapper">
                    <p>
                      Подать документы на легализацию юридического лица или предпринимателя можно
                      онлайн. Личный кабинет пользователя позволяет внести данные и загрузить
                      документы, скачать бланки и образцы заявлений, вести общение с
                      администраторами биржи, дополнять пакет документов, если будет такая
                      необходимость. Фактически, вся работа с биржей становится автоматизированной с
                      помощью Интернета.
                    </p>
                    <p>Чтобы воспользоваться сервисом – пройдите регистрацию в Личном кабинете.</p>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {lang === 'tm' ? (
            <>
              <SectionTitle title="Maliýe gözegçiligi" />
              <div className="sub-page-content-wrapper">
                <div className="sub-page-text-wrapper">
                  <p>
                    Jenaýatçylykdan alnan girdejileriň kanunlaşdyrylmagyna we terrorçylygy
                    maliýeleşdirmäge garşy çäreleri guramak üçin birža esasy maksatlary we
                    wezipeleri, içerki gözegçilik talaplaryny kesgitleýän düzgünlerini döretdi.
                    Şeýle hem, birža bu düzgünleriň berjaý edilmegi üçin jogapkär adamy belleýär.
                  </p>
                  <p>
                    Müşderiden alnan maglumatlara esaslanyp, komissiýanyň işgäri müşderiniň
                    işleriniň we amallarynyň görnüşlerini göz öňünde tutup, ony üns bilen barlaýar,
                    degişli töwekgelçilik derejesini bahalandyrýar we belleýär, şeýle hem ABU-yna
                    girizýär.
                  </p>
                </div>
                <div className="sub-page-title-text">
                  <h2 className="sub-page-title">Maliýe gözegçiligi bölüminde hasaba alyş </h2>
                  <div className="sub-page-text-wrapper">
                    <p>
                      Hukuk guramasynyň ýa-da telekeçiniň kanunlaşdyrylmagy üçin resminamalary
                      onlaýn görnüşinde hasaba alyp bolar. Ulanyjynyň şahsy otagy maglumatlary
                      girizmäge we resminamalary ýüklemäge, anketalary we nusgalary göçürip almaga,
                      alyş-çalyş dolandyryjylary bilen habarlaşmaga, zerur bolsa resminamalar
                      bukjasyny doldurmaga mümkinçilik berýär. Umuman, birža bilen baglanyşykly ähli
                      işler internetiň kömegi bilen doly awtomatlaşdyrylýar.
                    </p>
                    <p>Hyzmaty ulanmak üçin Şahsy otagyňyzda hasaba alynmagyňyz hökmanydyr.</p>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {lang === 'en' ? (
            <>
              <SectionTitle title="Financial monitoring" />
              <div className="sub-page-content-wrapper">
                <div className="sub-page-text-wrapper">
                  <p>
                    In order to organize counteraction to the legalization of proceeds from criminal
                    activity and the financing of terrorism, the exchange has established Rules that
                    define the main goals and objectives, internal control requirements. The
                    exchange also appoints a person responsible for compliance with these rules.
                  </p>
                  <p>
                    An employee of the commission, based on the information received from the
                    client, carefully checks it taking into account the types of activities and
                    operations of the client, evaluates and assigns the appropriate level of risk,
                    and also enters it into the AES.
                  </p>
                </div>
                <div className="sub-page-title-text">
                  <h2 className="sub-page-title">
                    Registration in the financial monitoring department
                  </h2>
                  <div className="sub-page-text-wrapper">
                    <p>
                      You can submit documents for the legalization of a legal entity or
                      entrepreneur online. The user's personal account allows you to enter data and
                      upload documents, download forms and application samples, communicate with
                      exchange administrators, supplement the package of documents if necessary. In
                      fact, all work with the exchange becomes automated using the Internet.
                    </p>
                    <p>To use the service, register in your Personal Account.</p>
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
                : lang === 'en'
                ? 'Documents for download'
                : null}
            </h2>
            <div className="documents-wrapper">
              <div className="documents-links-wrapper">
                {
                  docsData
                    ? docsData.data.map((doc) => {
                        return doc.page === 'Финансовый мониторинг' && doc.title != '-' ? (
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

export default Finance;
