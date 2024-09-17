import context, { useState } from 'react'
import UseContextChild2 from './UseContextChild2'

export const dat = context();

export default function context() {
    const [text,setText] = useState([]);
    const [arr,setArr] = useState([]);
    function handleClick(){
        setArr ((prev) => [...prev,text ] )
    }
  return (
    <div>context</div>
  )
}
