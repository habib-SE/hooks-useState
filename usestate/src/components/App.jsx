import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }


  function decrease() {
    if(count > 0){
    setcount(count - 1);
  } else {
    return count;
  }
}


  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6" style={{textAlign:'center'}}>
            <h1 className="p-2 ms-3">{count}</h1>
            <button className="btn btn-primary me-3 mb-3 " onClick={increase}>+</button>
            <button className="btn btn-primary mb-3" onClick={decrease}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
