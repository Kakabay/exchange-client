// Modules
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Api } from '../helpers/api';
import { useState, useEffect } from 'react';
import { parseDate } from '../helpers/functions';

ChartJS.register(LineElement, PointElement, LinearScale, Tooltip, CategoryScale);

const LineChart = ({ activeRow, tabIndex }) => {
  const [dataLineChart, setDataLineChart] = useState();
  useEffect(() => {
    // Table data fetch
    if (tabIndex) {
      const LineChartData = new Api(
        `http://tmex.gov.tm:8765/api/categories/${tabIndex}/tradings`,
        dataLineChart,
        setDataLineChart,
      ).get();
    }
  }, [tabIndex]);

  let delayed;

  const data = {
    labels: dataLineChart
      ? dataLineChart.data[activeRow].all_prices.map((price) => parseDate(price.date)).reverse()
      : [''],

    datasets: [
      {
        data: dataLineChart
          ? dataLineChart.data[activeRow].all_prices.map((price, index) => {
              if (index <= 9) {
                return price.price;
              } else {
                return '';
              }
            })
          : [''],
        borderColor: '#4b8dff',
        pointBorderWidth: 2,
        pointBackgroundColor: '#4b8dff',
        tension: 0.1,

        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 100 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    radius: 5,
    hitRadius: 30,
    hoverRadius: 7,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => value,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
