import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="p-2 ms-3">{count}</h1>
            <button className="btn btn-primary me-3 " onClick={increase}>+</button>
            <button className="btn btn-primary " onClick={decrease}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
