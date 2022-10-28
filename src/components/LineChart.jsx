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
  const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        data: [222, 217, 220, 215, 219, 221, 216, 218],
        backgroundColor: 'transparent',
        borderColor: '#f26c6d',
        // pointBorderColor: 'transparent',
        pointBorderWidth: 5,
        tension: 0.3,
      },
    ],
  };

  const options = {
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
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
