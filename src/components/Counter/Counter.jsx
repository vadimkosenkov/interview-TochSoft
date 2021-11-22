import { useEffect, useState } from "react";
import "./Counter.scss";

const Counter = ({ setTheme }) => {
  const [total, setTotal] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTotal(evenResult(count));
  }, [count]);

  const implement = () => setCount(count + 1);
  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  const evenResult = (value) => {
    if (value === 0) {
      setTheme("light");
      return "Начнём считать!";
    } else {
      setTheme(value % 2 === 0 ? "light" : "dark");
      return `Введено ${value % 2 === 0 ? "чётное" : "нечётное"} число`;
    }
  };

  return (
    <div className="counter">
      <div className="counter__result">{count}</div>
      <div className="counter__total">{total}</div>
      <div className="counter__btns">
        <button
          className="counter__btn counter__btn_primary"
          onClick={decrement}
        >
          -
        </button>
        <button className="counter__btn counter__btn_primary" onClick={reset}>
          Reset
        </button>
        <button
          className="counter__btn counter__btn_primary"
          onClick={implement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
