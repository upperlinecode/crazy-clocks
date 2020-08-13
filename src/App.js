import React from 'react';
import './App.css';

function App() {
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  return (
    <div className="App">
      <div className="clock">
        <p>Hours: {hours}</p>
        <p>Minutes: {minutes}</p>
        <p>Seconds: {seconds}</p>
      </div>
    </div>
  );
}

export default App;
