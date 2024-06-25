// src/App.js
import React from "react";
import Card from "./components/Card";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Card songNumber={1} />
      <Card songNumber={2} />
      <Card songNumber={3} />
    </div>
  );
}

export default App;
