import React, {useState} from 'react';
import './App.css';

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

// import ComponentA from './components/ComponentA'


const App = () => {
    const [cart, setCart] = useState(0);
  return (
      <div className="App">
        <ComponentB cart={cart} setCart={setCart} />
        <ComponentA cart={cart} />
      </div>
  )
}


export default App;