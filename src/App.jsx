import style from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calculatorVal, setCalculatorVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalculatorVal("");
    } else if (buttonText === "=") {
      let result = eval(calculatorVal);
      setCalculatorVal(result.toString());
    } else {
      let newDisplayValue = calculatorVal + buttonText;
      setCalculatorVal(newDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display displayValue={calculatorVal} />
      <ButtonsContainer ButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
