import React from 'react';
import ChartTable from './ChartTable';
import LineChart from './LineChart';

const DataChart = () => {
  return (
    <section className="chart">
      <div className="container">
        <div className="chart-wrapper">
          <div className="chart-tabs">
            <div className="active tab">
              <span>Металопродукция</span>
            </div>
            <div className="tab">
              <span>Сельхозпродукция</span>
            </div>
            <div className="tab">
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
