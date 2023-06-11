import "./App.css";
import "./styles/style.css";
import { useState } from "react";



const App = () => {
  const [counter, setcounter] = useState(0);


  return (
    <>
      <header>
        <button>submit</button>
      </header>
      <button onClick={(eo) => {
        eo.preventDefault()
        setcounter(counter-1)
      }}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {
                setcounter(counter+1) 

      }}>+</button>

      <div className="info">
        <h1>Our contact info</h1>
        <p>This is our info</p>
      </div>
    </>
  );
};



export default App;
