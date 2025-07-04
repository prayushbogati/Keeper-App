import React from "react";
import { useState } from "react";
const ChangeNum = () =>{
    const [count, setCount] = useState(0)
    const increase = () =>{
        setCount(count + 1);
    }
    const decrease = () =>{
        setCount(count - 1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick = {increase}>+</button>
            <button onClick = {decrease}>-</button>
        </div>
    )
}
export default ChangeNum;