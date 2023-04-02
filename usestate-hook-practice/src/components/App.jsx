import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function provide() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(provide, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={provide}>Get Time</button>
    </div>
  );
}

export default App;
