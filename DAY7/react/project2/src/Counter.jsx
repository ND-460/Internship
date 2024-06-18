import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [visible,setVisib] = useState(false);
  const handleIncrement = () => {
    
    setTimeout(() =>{
      // setCount(count + 1);}
        setCount((currval) => currval + 1)},2000)
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  // let visible = true;
  const toggle = () =>{
    setVisib(!visible);
  }
  return (
    <div>
      <h1>Counter</h1>
      {visible && <p>Count: {count}</p>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggle}>Toggle</button>

    </div>
  );
};

export default Counter;