import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { createComponent } from "@lit-labs/react";
import { useState } from "react";
import Select from "./components/select";
import Chart from "./components/chart";

function App() {
  const [value, setValue] = useState("");

  const data2 = {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Price",
          data: [37.4, 36.6, 40.48, 41.13, 42.05, 40.42, 43.09],
          fill: true,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: "Line chart",
        },
        legend: {
          // only required when importing chart.js/auto
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return tooltipItem.formattedValue + " $";
            },
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Price ($)",
          },
        },
      },
    },
  };
  const data = [
    { label: "Tea", value: "tea" },
    { label: "Beer", value: "beer" },
  ];

  const handleChange = (value) => {
    setValue(value);
  };

  const handleClickReset = () => {
    setValue("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ef-panel spacing>
        <Select
          className="my-select"
          onChange={handleChange}
          data={data}
          value={value}
        />
        <button onClick={handleClickReset}>Reset</button>
        <Chart data={data2}></Chart>
      </ef-panel>
    </div>
  );
}

export default App;
