
import React from "react";
import './../styles/App.css';
import { decrement, increment ,clear} from "./counterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const App = () => {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()
  return (
    <div>
        {/* <h2>Redux Counter</h2> */}
        <h1>{count}</h1>

        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
       
    </div>
  )
}

export default App
