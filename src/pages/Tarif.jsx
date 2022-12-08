// Modules
import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import Tab from '../components/Tab';
import SectionTitle from '../components/SectionTitle';
import TarifService from '../components/TarifService';

const Tarif = () => {
  const [activeTab, setActiveTab] = useState(1);
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
              {tarifData
                ? tarifData.data.map((tarif) => {
                    return tarif.type === 'resident' ? (
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
                    return tarif.type === 'non_resident' ? (
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
