import React, { useRef } from 'react'

export default function UseRefHook() {

    const Inpref = useRef(null);
    const disp = useRef()

    function handleClick(){
        console.log(Inpref.current.value);
        disp.current.innerHTML = Inpref.current.value
       
        disp.current.style.background = '#' +Math.random().toString(16).substr(-6);
        disp.current.style.color = '#'+Math.random().toString(16).substr(-6);
        
    }

  
return (
      <div>
        <label htmlFor="">Enter Text:</label>
        <input  ref = {Inpref} type="text"  name="" id=""/>
        <button onClick={handleClick}>Send</button>
        <h1 ref={disp}></h1>

      </div>

)
}