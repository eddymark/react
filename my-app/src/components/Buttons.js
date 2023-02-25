import { useState } from "react";


const Counter = (props)=>{
    const [counter, setCounter] = useState(0);
    return(
        <div className="counter">
        {/* sets the count on click */}
        <button onClick={()=> setCounter((prevCount) => prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=> setCounter((nextCount)=> nextCount+1)}>+</button>
        <button id='resetSpace'onClick={()=> setCounter((reset) => reset = 0)}>reset</button>
        </div>

    )

}
export default Counter;