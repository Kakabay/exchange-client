// Modules
import { Bar } from "react-chartjs-2";
import {
  Chart as CharJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
CharJS.register(CategoryScale, LinearScale, BarElement);

const LineChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
        height={500}
        width={400}
      />
    </div>
  );
};

export default LineChart;
