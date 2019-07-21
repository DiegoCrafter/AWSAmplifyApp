import { useState } from "react";

export default initialArr => {
  const [arr, setArr] = useState(initialArr);

  const setArrIndex = (index, value) => {
    const actualValue = typeof value === "function" ? value(arr[index]) : value;
    const arrayCopy = [...arr];
    arrayCopy[index] = actualValue;
    setArr(arrayCopy);
  };

  return [arr, setArr, setArrIndex];
};
