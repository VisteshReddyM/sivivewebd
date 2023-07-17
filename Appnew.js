import { useState } from "react";
import React from "react";
import "./style.css";
import BarChart from "./components/BarChart";
import Doughnut from "./components/Doughnut";
import StackedBarChart from './components/StackedBar';
import { userData1 } from './data';
import { UserData } from "./Datanew";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Status),
    datasets: [
      {
        label: "Progress Status",
        data: UserData.map((data) => data.Total),
        backgroundColor: [
          "#e31010",
          "#f0d405",
          "#087306"
        ],
        borderColor: "white",
        borderWidth: 1.2,
        barPercentage: 0.6
      },
    ],
  });

  

  return (
    <div className="App">
      <div className="bar" style={{ width: 400 }}>
        <BarChart chartData={userData} />
      </div>
      
      <div className="doughnut" style={{ width: 300 }}>
        <Doughnut chartData={userData} />
      </div>

      <div className="StackedBar" style={{ width: 1000 }}>
      <h1>Progress status Eventwise </h1>
      <StackedBarChart data={userData1} />
      </div>

    </div>
  );
}

export default App;
