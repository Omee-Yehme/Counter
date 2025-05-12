import { useState } from "react"
import './App.css'
export default function Count() {
    const [count, setCount] = useState(0)

    return(
        <div className="App">
            <h1>Counter App</h1>
            Count: {count}
            <div>
                <button onClick={()=>{
                setCount((count)=> count+1)
            }}>Increment</button>
            <button onClick={()=>{
                setCount((count)=> count-1)
            }}>Decrement</button>
            </div>
            
        </div>
    )
}