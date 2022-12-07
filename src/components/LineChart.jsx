// Modules
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';
import { Api } from '../helpers/api';
import { useState, useEffect } from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = ({ activeRow }) => {
  const [dataLineChart, setDataLineChart] = useState();
  useEffect(() => {
    // Table data fetch
    const LineChartData = new Api(
      'http://tmex.gov.tm:8765/api/categories/8/tradings',
      dataLineChart,
      setDataLineChart,
    );
    LineChartData.get();
  }, []);

  let delayed;

  const data = {
    labels: dataLineChart
      ? dataLineChart.data[activeRow].all_prices.map((price) =>
          price.date.split(' ')[0].replace('-', '.').replace('-', '.'),
        )
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
    responsive: true,
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
        // min: 2,
        // max: 5,
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
