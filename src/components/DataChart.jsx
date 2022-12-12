// Modules
import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import ChartTable from './ChartTable';
import LineChart from './LineChart';

const DataChart = ({ lang }) => {
  // States
  const [activeRow, setActiveRow] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [tabData, setTabData] = useState();

  useEffect(() => {
    // Table data fetch
    const TabData = new Api('http://tmex.gov.tm:8765/api/categories', tabData, setTabData);
    TabData.get({ 'X-Localization': lang });
  }, []);

  return (
    <section className="chart">
      <div className="container">
        <div className="chart-wrapper">
          <div className="chart-tabs">
            {tabData
              ? tabData.data.map((tab, index) => {
                  return index <= 2 ? (
                    <div
                      key={tab.id}
                      className={`${activeTab === index ? 'active' : ''} tab`}
                      onClick={() => setActiveTab(index)}>
                      <span>{tab.title}</span>
                    </div>
                  ) : null;
                })
              : null}
          </div>
          <div className="chart-data">
            <ChartTable activeRow={activeRow} setActiveRow={setActiveRow} />
            <div className="line-chart-wrapper">
              <LineChart activeRow={activeRow} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataChart;
