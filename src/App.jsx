import React from "react";
import "./App.css";
import Hello from "./components/Hello";
import names from "./data/names";

function App() {

  return (
    <div className="App">
      {
        names.map((name, index) => (
          <Hello key={index + 1} name={name} />
        ))
      }
    </div>
  );
}

export default App;
