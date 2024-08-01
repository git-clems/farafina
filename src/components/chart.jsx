// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BarChart = () => {
  const data = {
    labels: ['5 étoile', '4 étoile', '3 étoile', '2 étoile', '1 étoile'],
    datasets: [
      {
        label: "Retour client",
        data: [44.82, 34.48, 10.35, 6.90, 3.45

        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 10
      }
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      },
    }
};


  return <Bar data={data} options={options} />;
};

export default BarChart;
