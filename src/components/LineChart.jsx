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

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = () => {
  let delayed;

  const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'fsf',
        data: [222, 217, 220, 215, 219, 221, 216, 218],
        borderColor: '#4b8dff',
        pointBorderWidth: 5,
        pointBackgroundColor: '#4b8dff',
        tension: 0.3,

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
    responcive: true,
    radius: 5,
    hitRadius: 30,
    hoverRadius: 10,
    plugins: {
      legend: false,
    },
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
          stepSize: 2,
          callback: (value) => value + 'K',
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
