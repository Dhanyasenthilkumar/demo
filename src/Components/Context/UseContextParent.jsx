import React, { useState } from 'react'
import UseContextChild1 from './UseContextChild1'
import { createContext } from 'react'
import UseContextChild2 from './UseContextChild2'

export const dat = createContext();

export default function UseContextparent() {
    const [text,setText] = useState("");
    const [arr,setArr] = useState([]);
    function handleClick(){
       setArr ((prev)=>[...prev,text]) 
    }
  return (
    <div>
        <label htmlFor="">Add Todo</label>
        <input type="text" name="" id="" onChange={(e)=>{
            setText(e.target.value);
        }} placeholder="Enter todo" />
        <button onClick={handleClick}>Submit</button>
        <dat.Provider value={arr}>
            <ProviderComponent />
      </dat.Provider>
 </div>
  )
}
function ProviderComponent(){
    return(
        <div>
        <UseContextChild1 />
        <UseContextChild2 />
        </div>
    )
}
