// Modules
import React from 'react';
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import ChartTable from './ChartTable';
import LineChart from './LineChart';

const DataChart = ({ lang }) => {
  // States
  const [tabData, setTabData] = useState();
  const [activeRow, setActiveRow] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [tabIndex, setTabIndex] = useState();

  useEffect(() => {
    // Table data fetch
    const TabData = new Api('http://tmex.gov.tm:8765/api/categories', tabData, setTabData).get({
      'X-Localization': lang,
    });
  }, [lang]);

  // Functions
  const tabDataFetch = (id, index) => {
    setTabIndex(id);
    setActiveTab(index);
  };

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
                      className={`${tabIndex === tab.id ? 'active' : ''} tab`}
                      onClick={() => {
                        tabDataFetch(tab.id, index);
                      }}>
                      <span>{tab.title}</span>
                    </div>
                  ) : null;
                })
              : null}
          </div>
          <div className="chart-data">
            <ChartTable activeRow={activeRow} setActiveRow={setActiveRow} tabIndex={tabIndex} />
            <div className="line-chart-wrapper">
              <LineChart activeRow={activeRow} tabIndex={tabIndex} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataChart;
