// Modules
import { useEffect } from 'react';
// Components
import SectionTitle from '../components/SectionTitle';

const Gtsbt = ({ lang }) => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        {lang === 'ru' ? (
          <div className="sub-page-wrapper">
            <SectionTitle title="О бирже" />
            <div className="sub-page-content-wrapper">
              <div className="sub-page-text-wrapper">
                <p>
                  Государственная товарно-сырьевая биржа Туркменистана была создана Указом
                  Президента Туркменистана от 29 июля 1994 года и является важнейшим экономическим
                  институтом страны. Биржа выполняет функцию главного органа государственного
                  регулирования экспортно-импортных операций. Отлаженный механизм функционирования
                  позволяет ей успешно интегрироваться в международную экономическую систему.
                </p>
                <p>
                  Спектр деятельности ГТСБТ чрезвычайно широк – она является универсальной биржей,
                  принимая и реализуя через торги различные товарно-материальные ценности (за
                  исключением объектов интеллектуальной собственности), произведения искусства и
                  недвижимость.
                </p>
              </div>

              <div className="sub-page-list-wrapper">
                <h2 className="sub-page-title">Задачи и цели биржи</h2>
                <div className="sub-page-list">
                  <div className="sub-page-list-item">
                    <div className="sub-page-list-num">1</div>
                    <h3 className="sub-page-list-item-text">
                      Создать равные условия для ее участников – деловым иностранным людям и
                      предпринимателям Туркменистана
                    </h3>
                  </div>
                  <div className="sub-page-list-item">
                    <div className="sub-page-list-num">2</div>
                    <h3 className="sub-page-list-item-text">Увеличить и ускорить товарооборот</h3>
                  </div>
                  <div className="sub-page-list-item">
                    <div className="sub-page-list-num">3</div>
                    <h3 className="sub-page-list-item-text">
                      Насытить внутренний рынок необходимыми товарами народного потребления,
                      продукцией производственно-технического назначения и оборудованием,
                      предназначенным для модернизации народно-хозяйственного комплекса страны.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="sub-page-text-wrapper">
                <p>
                  Квалифицированные специалисты биржи оценивают целесообразность ввоза и вывоза
                  продукции, проводят анализ влияния различных факторов на импорт и экспорт товаров
                  и продукции.
                </p>
                <p>
                  Главным достижение последних лет стало внедрение электронного документооборота –
                  автоматизированной системы, которая позволяет оперативно контролировать
                  прохождение контрактов и документов, начиная с их ввода в базу данных и заканчивая
                  регистрацией и выдачей клиенту.
                </p>
                <p>
                  На биржевых торгах реализуется продукция отечественного производства, которая
                  экспортируется в более 40 государств мира. Среди них - Турция, Китай, Россия, ОАЭ,
                  Германия, США, Великобритания, Украина, Швейцария. Основными статьями экспорта
                  являются нефтепродукты, хлопок-волокно, продукция текстильной и химической
                  промышленности и т.д.
                </p>
              </div>

              <div className="sub-page-title-text">
                <h2 className="sub-page-title">Правила биржевой торговли</h2>
                <div className="sub-page-text-wrapper">
                  <p>
                    В соответствии с Законом Туркменистана «О товарно-сырьевых биржах», участниками
                    биржевых торгов могут быть предприятия и организации всех форм собственности,
                    граждане Туркменистана и других государств путем приобретения брокерского места
                    или заключением контракта на обслуживание с брокерами биржи.
                  </p>
                </div>
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
            </div>
          </div>
        ) : null}

        {lang === 'tm' ? (
          <div className="sub-page-wrapper">
            <SectionTitle title="Birža barada" />
            <div className="sub-page-content-wrapper">
              <div className="sub-page-text-wrapper">
                <p>
                  Türkmenistanyň Döwlet haryt we çig mal biržasy (TDHÇMB) Türkmenistanyň
                  Prezidentiniň 1994-nji ýylyň 29-njy iýulyndaky Karary bilen döredildi we ýurduň iň
                  möhüm ykdysady instituty bolup durýar. Birža eksport we import amallaryny amala
                  aşyrmakda döwleti düzgünleşdirýän esasy edaranyň wezipesini ýerine ýetirýär.
                  Sazlaşykly döredilen mehanizm halkara ykdysady ulgamyna üstünlikli birleşmäge
                  mümkinçilik berýär.
                </p>
                <p>
                  TDHÇMB-nyň işiniň gerimi örän giňdir – dürli haryt we maddy baýlyklary
                  (intellektual eýeçiligi hasaba almazdan), sungat eserlerini we gozgalmaýan
                  emläkleri kabul edip satýan köptaraplaýyn biržasydyr.
                </p>
              </div>

              <div className="sub-page-list-wrapper">
                <h2 className="sub-page-title">Biržanyň wezipeleri we maksatlary:</h2>
                <div className="sub-page-list">
                  <div className="sub-page-list-item">
                    <div className="sub-page-list-num">1</div>
                    <h3 className="sub-page-list-item-text">
                      Biržanyň müşderileri – Türkmenistanyň daşary ýurtly işewür adamlary we
                      telekeçileri üçin deň şertleri döretmek.
                    </h3>
                  </div>
                  <div className="sub-page-list-item">
                    <div className="sub-page-list-num">2</div>
                    <h3 className="sub-page-list-item-text">
                      Söwda dolanyşygyny ýokarlandyrmak we çaltlaşdyrmak.
                    </h3>
                  </div>
                  <div className="sub-page-list-item">
                    <div className="sub-page-list-num">3</div>
                    <h3 className="sub-page-list-item-text">
                      Ýurduň milli ykdysady toplumyny döwrebaplaşdyrmak üçin içerki bazary zerur
                      sarp ediş harytlary, önümçilik, tehniki önümler we enjamlar bilen doldurmak.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="sub-page-text-wrapper">
                <p>
                  Biržanyň ökde hünärmenleri önümleriň importynyň we eksportynyň maksadalaýyklygyna
                  baha berýärler, dürli faktorlaryň harytlaryň we önümleriň importyna we eksportyna
                  edýän täsirini seljerýärler.
                </p>
                <p>
                  Birža söwdasynda ýerli öndürilen önümler dünýäniň 40-dan gowrak ýurduna eksport
                  edilýär we alyş-çalyş auksionlarynda satylýar. Olaryň arasynda Türkiýe, Hytaý,
                  Russiýa, BAE, Germaniýa, ABŞ, Beýik Britaniýa, Ukraina, Şweýsariýa ýaly ýurtlar
                  bar. Esasy eksport önümleri bolup nebit, pagta süýümi, dokma we himiýa senagatynyň
                  önümleri we ş.m. hyzmat edýär.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Gtsbt;
