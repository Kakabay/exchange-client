// Modules
import { useEffect } from 'react';
// Components
import SectionTitle from '../components/SectionTitle';

const Gtsbt = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="О бирже" />
          <div className="sub-page-content-wrapper">
            <div className="sub-page-text-wrapper">
              <p>
                Государственная товарно-сырьевая биржа Туркменистана была создана Указом Президента
                Туркменистана от 29 июля 1994 года и является важнейшим экономическим институтом
                страны. Биржа выполняет функцию главного органа государственного регулирования
                экспортно-импортных операций. Отлаженный механизм функционирования позволяет ей
                успешно интегрироваться в международную экономическую систему.
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
                продукции, проводят анализ влияния различных факторов на импорт и экспорт товаров и
                продукции.
              </p>
              <p>
                Главным достижение последних лет стало внедрение электронного документооборота –
                автоматизированной системы, которая позволяет оперативно контролировать прохождение
                контрактов и документов, начиная с их ввода в базу данных и заканчивая регистрацией
                и выдачей клиенту.
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
      </div>
    </main>
  );
};

export default Gtsbt;
