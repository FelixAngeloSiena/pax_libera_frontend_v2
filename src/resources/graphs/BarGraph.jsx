import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend );
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const dataCount = [200,400,300,500,100,50,70,80];
  const dataCount2 = [50,70,300,400,200,10,80,250];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Graph',
      },
    },
  };

  const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map((items, index) => dataCount[index]),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map((items, index) => dataCount2[index]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  return (
    <Bar options={options} data={data} />
  )
}

export default BarGraph