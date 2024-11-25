import React, {useState}from 'react'
import "../App.css";

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) =>{
        setInput(input + value);
    };

    const caralho = (value) => {
        if (value === "%") {
            setInput((prev) => (parseFloat(prev)/ 100).toString());
        }else{
            setInput((prev) => prev + value);
        }
    }

    const clear = () =>{
        setInput("");
    };

    const calculate = () => {
        try{
            setInput(eval(input));
        }catch{
            setInput("ERR");
        }
    }

  return (
    <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">

        <button onClick={clear} className="clear">C</button>
        <button onClick={() => handleClick("/")}>&divide;</button>
        <button onClick={() => handleClick("*")}>&times;</button>
        <button onClick={() => handleClick("-")}>&minus;</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => caralho("%")}>%</button>
        <button onClick={() => handleClick("0")} className="zero">0</button>
        <button onClick={calculate} className="equals">=</button>
        </div>
    </div>
  )
}

export default Calculator