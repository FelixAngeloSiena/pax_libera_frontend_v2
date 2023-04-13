import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineGraphComponent = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "Jan 2022",
    "Feb 2022",
    "Mar 2022",
    "Apr 2022",
    "May 2022",
    "Jun 2022",
    "Jul 2022",
    "Aug 2022",
    "Sept 2022",
    "Oct 2022",
    "Nov 2022",
    "Dec 2022",
  ];
  const dataCount = [200, 400, 300, 500, 100, 50, 70, 80, 400, 300, 500, 100];
  const dataCount2 = [50, 70, 300, 400, 200, 10, 80, 250, 200, 10, 80, 250];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Purchase Request",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Declined",
        data: labels.map((items, index) => dataCount[index]),
        borderColor: "rgb(223, 46, 56)",
        backgroundColor: "rgba(223, 46, 56, 0.5)",
      },
      {
        label: "Approved",
        data: labels.map((items, index) => dataCount2[index]),
        borderColor: "rgb(84, 180, 53)",
        backgroundColor: "rgba(84, 180, 53, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineGraphComponent;
