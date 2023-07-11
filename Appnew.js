import { useState } from "react";
import "./style.css";
import BarChart from "./components/BarChart";
import Doughnut from "./components/Doughnut";
import { UserData } from "./Datanew";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Status),
    datasets: [
      {
        label: "Progress Status",
        data: UserData.map((data) => data.Total),
        backgroundColor: [
          "#FF6969",
          "#FFD3B0",
          "#A6D0DD"
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  

  return (
    <div className="App">
      <div className="bar" style={{ width: 500 }}>
        <BarChart chartData={userData} />
      </div>
      
      <div className="doughnut" style={{ width: 400 }}>
        <Doughnut chartData={userData} />
      </div>
    </div>
  );
}

export default App;