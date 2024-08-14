import React, {FC} from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';

const App:FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="App"
         style={
        { display: "flex", justifyContent: "center", alignItems: "center" }
         }>
      <h2>{counter}</h2>
      <div className="button"
           style={{height: 100, width: 100, color: "blue"}}
           onClick={() => setCounter(counter + 1)}
      >
          <p>Click to update</p>
ß
      </div>

    </div>
  );
}

export default App;
