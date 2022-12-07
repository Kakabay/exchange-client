// Modules
import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import Tab from '../components/Tab';
import SectionTitle from '../components/SectionTitle';
import TarifService from '../components/TarifService';

const Tarif = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [tarifData, setTarifData] = useState();

  useEffect(() => {
    const TarifApi = new Api('http://tmex.gov.tm:8765/api/tariffs', tarifData, setTarifData);
    TarifApi.get({ 'X-Localization': 'en' });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Тарифы и сборы" />
          <div className="tarif-wrapper">
            <div className="tarif-wrapper-top">
              <Tab
                text="Для резидентов"
                active={activeTab === 1 ? true : false}
                onClick={() => setActiveTab(1)}
              />
              <Tab
                text="Для не резидентов"
                active={activeTab === 2 ? true : false}
                onClick={() => setActiveTab(2)}
              />
            </div>
          </div>
          {activeTab === 1 ? (
            <div className="tarif-table">
              <TarifService
                title="Составление, распечатка и оформление проектов и экземпляров контрактов (с учетом стоимости
              бумаги, за одну страницу), информация на одной странице"
                price="100"
                activeTab={activeTab}
              />
              <TarifService
                title="Брокерские услуги"
                price="0 – 525 000 - 525 ТМТ Свыше 525 001 ТМТ - 0.1 %"
                activeTab={activeTab}
              />
              <TarifService title="Покупка брокерского места" price="10 000" />
              <TarifService
                title="Регистрация дополнительных соглашений (Одно дополнительное соглашение независимо от количества страниц)"
                price="350"
                activeTab={activeTab}
              />
              <TarifService
                title="Информация по ценам (за одну позицию)"
                price="105"
                activeTab={activeTab}
              />
              <TarifService
                title="Регистрация клиента отделом финансового мониторинга"
                price="525"
                activeTab={activeTab}
              />
              <TarifService
                title="Сведения о ценах, в том, числе заключение по цене (стоимость одной позиции, но общая стоимость не должна превышать стоимость 100 позиций)"
                price="105"
                activeTab={activeTab}
              />
            </div>
          ) : null}
          {activeTab === 2 ? (
            <div className="tarif-table">
              <TarifService
                title="Составление, распечатка и оформление проектов и экземпляров контрактов (с учетом стоимости
              бумаги, за одну страницу), информация на одной странице"
                price="100"
                activeTab={activeTab}
              />
              <TarifService title="Брокерские услуги" price="150" />
              <TarifService
                title="Покупка брокерского места"
                price="$5 000
                $10 000 (для покупателей товарной
                продукции нефти-газовой
                отрасли)
                "
                activeTab={activeTab}
              />
              <TarifService
                title="Регистрация дополнительных соглашений (Одно дополнительное соглашение независимо от количества страниц)"
                price="100"
                activeTab={activeTab}
              />
              <TarifService
                title="Информация по ценам (за одну позицию)"
                price="30"
                activeTab={activeTab}
              />
              <TarifService
                title="Регистрация клиента отделом финансового мониторинга"
                price="150"
                activeTab={activeTab}
              />
              <TarifService
                title="Сведения о ценах, в том, числе заключение по цене (стоимость одной позиции, но общая стоимость не должна превышать стоимость 100 позиций)"
                price="30"
                activeTab={activeTab}
              />
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Tarif;
