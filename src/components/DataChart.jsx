// Modules
import React from 'react';
import { useState } from 'react';
// Components
import ChartTable from './ChartTable';
import LineChart from './LineChart';

const DataChart = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="chart">
      <div className="container">
        <div className="chart-wrapper">
          <div className="chart-tabs">
            <div
              className={`${activeTab === 1 ? 'active' : ''} tab`}
              onClick={() => setActiveTab(1)}>
              <span>Металопродукция</span>
            </div>
            <div
              className={`${activeTab === 2 ? 'active' : ''} tab`}
              onClick={() => setActiveTab(2)}>
              <span>Сельхозпродукция</span>
            </div>
            <div
              className={`${activeTab === 3 ? 'active' : ''} tab`}
              onClick={() => setActiveTab(3)}>
              <span>Лесопродукция</span>
            </div>
          </div>
          <div className="chart-data">
            <ChartTable />
            <div className="line-chart-wrapper">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataChart;
