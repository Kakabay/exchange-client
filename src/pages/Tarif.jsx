// Modules
import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import Tab from '../components/Tab';
import SectionTitle from '../components/SectionTitle';
import TarifService from '../components/TarifService';

const Tarif = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [tarifData, setTarifData] = useState();

  useEffect(() => {
    const TarifApi = new Api('https://tmex.gov.tm:8765/api/tariffs', tarifData, setTarifData).get({
      'X-Localization': lang,
    });

    // Scroll to top
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper sub-page-full">
          {lang === 'ru' ? (
            <SectionTitle title="Тарифы и сборы" />
          ) : lang === 'tm' ? (
            <SectionTitle title="Nyrhlar we ýygymlar" />
          ) : lang === 'en' ? (
            <SectionTitle title="Tariffs and fees" />
          ) : null}

          <div className="tarif-wrapper">
            <div className="tarif-wrapper-top">
              {lang === 'ru' ? (
                <>
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
                </>
              ) : lang === 'tm' ? (
                <>
                  <Tab
                    text="Ýerli ýaşaýjylar üçin"
                    active={activeTab === 1 ? true : false}
                    onClick={() => setActiveTab(1)}
                  />
                  <Tab
                    text="Ýerli bolmadyk ýaşaýjylar üçin"
                    active={activeTab === 2 ? true : false}
                    onClick={() => setActiveTab(2)}
                  />
                </>
              ) : lang === 'en' ? (
                <>
                  <Tab
                    text="For residents"
                    active={activeTab === 1 ? true : false}
                    onClick={() => setActiveTab(1)}
                  />
                  <Tab
                    text="For non-residents"
                    active={activeTab === 2 ? true : false}
                    onClick={() => setActiveTab(2)}
                  />
                </>
              ) : null}
            </div>
          </div>
          {activeTab === 1 ? (
            <div className="tarif-table">
              {tarifData
                ? tarifData.data.map((tarif) => {
                    return tarif.type === 'resident' && tarif.title != '-' ? (
                      <TarifService
                        title={tarif.title}
                        price={tarif.prices.map((tarifPrice) => tarifPrice.price + ' ')}
                      />
                    ) : null;
                  })
                : null}
            </div>
          ) : null}
          {activeTab === 2 ? (
            <div className="tarif-table">
              {tarifData
                ? tarifData.data.map((tarif) => {
                    return tarif.type === 'non_resident' && tarif.title != '-' ? (
                      <TarifService
                        title={tarif.title}
                        price={tarif.prices.map((tarifPrice) => tarifPrice.price + ' ')}
                      />
                    ) : null;
                  })
                : null}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Tarif;
