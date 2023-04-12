import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend );
  const labels = ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'July 2023'];
  const dataCount = [200,400,300,500];
  const dataCount2 = [50,70,300,400];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income and Expenses This Pascal Year',
      },
    },
  };

  const data = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: labels.map((items, index) => dataCount[index]),
      borderColor: 'rgb(228, 85, 37)',
      backgroundColor: 'rgba(228, 85, 37, 0.5)',
    },
    {
      label: 'Income',
      data: labels.map((items, index) => dataCount2[index]),
      borderColor: 'rgb(130, 205, 71)',
      backgroundColor: 'rgba(130, 205, 71, 0.5)',
    },
  ],
};

  return (
    <Bar options={options} data={data} />
  )
}

export default BarGraph