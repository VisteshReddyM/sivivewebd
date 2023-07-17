import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedBarChart = ({ data }) => {
  // Extracting the labels (Event names) from the JSON data
  const labels = data.map(entry => entry.EventName);

  // Extracting the data for each status (PastDueDate, DueToday, DueLater)
  const pastDueData = data.map(entry => entry.PastDueDate);
  const dueTodayData = data.map(entry => entry.DueToday);
  const dueLaterData = data.map(entry => entry.DueLater);

  // Creating the dataset for the chart
  const dataset = {
    labels: labels,
    datasets: [
      {
        label: 'Past Due Date',
        data: pastDueData,
        backgroundColor: '#e31010',
        borderColor: "white",
        borderWidth: 1.2,
        barPercentage: 0.8
      },
      {
        label: 'Due Today',
        data: dueTodayData,
        backgroundColor: '#f0d405',
        borderColor: "white",
        borderWidth: 1.2,
        barPercentage: 0.8
      },
      {
        label: 'Due Later',
        data: dueLaterData,
        backgroundColor: '#087306',
        borderColor: "white",
        borderWidth: 1.2,
        barPercentage: 0.8
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: { 
           stacked: true,
           grid:{
            drawOnChartArea: false,
           
          },
           title:{
            display:true,
            text:'Events',
            color:'#000000',
            font: {
              weight: "bold",
              size: 20,
              
            }
          },
          ticks: { color: '#000000', beginAtZero: true }
         },
      y: { 
           stacked: true,
           title:{
            display:true,
            text:'Orders',
            color:'#000000',
            font: {
              weight: "bold",
              size: 20,
              
            }
          },
          ticks: { color: '#000000', beginAtZero: true }
        },
    },
    legend:{
        display:true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
          color:'#000000',
              font: {
                size: 13,
              }
          
          
        },
    }    
  
  };

  return <Bar data={dataset} options={options} />;
};

export default StackedBarChart;
