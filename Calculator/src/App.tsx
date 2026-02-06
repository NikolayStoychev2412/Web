import { useState } from "react";
import InputComponent from "./InputComponent";
import ResultComponent from "./ResultComponent";
export default function App() 
{
  
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [sign, setSign] = useState("+");

 
  let error = "";
  let result: number | null = null;

  const a = Number(first);
  const b = Number(second);

  if (first === "" || second === "") {
    error = "Въведи и двете числа.";
  } else if (Number.isNaN(a) || Number.isNaN(b)) {
    error = "Грешка: въведи валидни числа.";
  } else if (sign === "/" && b === 0) {
    error = "Грешка: деление на 0 е невъзможно!";
  } else {
    if (sign === "+") result = a + b;
    if (sign === "-") result = a - b;
    if (sign === "*") result = a * b;
    if (sign === "/") result = a / b;
  }

  return (
    <div>
      <h2>Calculator</h2>

      <InputComponent
        first={first}
        second={second}
        sign={sign}
        setFirst={setFirst}
        setSecond={setSecond}
        setSign={setSign}
      />

      <ResultComponent result={result} error={error} />
    </div>
  );
}