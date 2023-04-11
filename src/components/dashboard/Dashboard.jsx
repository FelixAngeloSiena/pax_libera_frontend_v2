import React from "react";
import { Card } from "antd";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../../assets/css/Styles.css";

const Dashboard = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Cash Flow",
        data: [5, 9, 11, 16, 15, 18, 21, 18, 22, 25, 26, 50],
        backgroundColor: "rgba(228, 85, 37, 0.2)",
        borderColor: "black",
        pointBorderColor: "#e45525",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugin: {
      legend: false,
    },
    scale: {
      y: {},
    },
  };

  const dataBarG = {
    labels: [
      "Jan 2023",
      "Feb 2023",
      "Mar 2023",
      "Apr 2023",
      "May 2023",
      "June 2023",
      "July 2023",
      "Aug 2023",
      "Sept 2023",
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
    ],
    datasets: [
      {
        label: "Income and Expenses",
        data: [65, 59, 80, 81],
        backgroundColor: "rgba(228, 85, 37, 0.2)",
        borderColor: "#e45525",
        borderWidth: 1,
      },
    ],
  };

  const optionsBarG = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <h1
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          borderBottom: "5px #e45525 solid",
        }}
      >
        Dashboard
      </h1>
      <div className="line-graph-container">
        <Card>
          <h3>Cash Flow</h3>
          <Line type={Chart} data={data} options={options}></Line>
        </Card>
      </div>

      <div className="bar-graph-container">
        <Card>
          <h3>Income and Expenses</h3>
          <Bar type={Chart} data={dataBarG} options={optionsBarG} />
        </Card>
      </div>
    </>
  );
};

export default Dashboard;