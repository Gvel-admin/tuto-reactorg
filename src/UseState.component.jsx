import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(() => 0);
  const [theme, setTheme] = useState('blue');

  function incrementValue() {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setTheme('red');
  }

  function decrementValue() {
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    setTheme('blue');
  }

  return (
    <>
      <button onClick={decrementValue}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementValue}>+</button>
    </>
  );
}
export default UseState;
