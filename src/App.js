import React from "react";
import "./App.css";

function App() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let color = "red";
  let hourStyle = {
    color: `${color}`
  };
  let minStyle = {
    color: "orange"
  };
  let secondStyle = {
    color: "purple",
    fontSize: seconds
  };
  let divStyle = {
    color: "black"
  };
  var amount = 0;
  if (hours < 12) {
    amount = minutes * hours * 0.4;
    console.log(amount);
    divStyle.backgroundColor = `rgb(${amount}, ${amount}, 0)`;
  } else {
    divStyle.backgroundColor = `rgb(0,0, 255)`;
  }

  if (minutes > 30) {
    minStyle.color = "green";
  }

  if (minutes % 2 === 0) {
    minStyle.fontWeight = "bold";
  } else if (minutes % 2 === 1) {
    minStyle.fontFamily = "Helvetica";
  }

  if (seconds % 15 === 0) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    color = `rgb(${r}, ${g}, ${b})`;
  }

  let greeting = "";
  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours >= 12 && hours < 15) {
    greeting = "Good Afternoon";
  } else {
    console.log(hours);
    greeting = "Good Evening";
  }
  return (
    <div className="App" style={divStyle}>
      <div className="clock">
        <p>{greeting}</p>
        <p style={hourStyle}>Hours: {hours}</p>
        <p style={minStyle}>Minutes: {minutes}</p>
        <p style={secondStyle}>Seconds: {seconds}</p>
      </div>
    </div>
  );
}

export default App;
