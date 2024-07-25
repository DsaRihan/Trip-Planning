import React, { useState } from "react";
import data from './data';
import Tours from "./Components/Tours";



const App = () => {

  const [tours,settour]=useState(data);

  function nothandler(id){
        const newtours=tours.filter(tour => tour.id !== id);
        settour(newtours);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours</h2>
        <button className="btn-white" onClick={()=>settour(data)}>
            Refresh
        </button>

      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} nothandler={nothandler}></Tours>
    </div>
  )
};


export default App;
