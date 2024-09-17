import React from 'react'
import ChildProp from './childprop';
export default function ParentProp(){
    const arr = ["Blue","Red","Pink","Yellow","Green"];
    return(
        <div>
            <h1>Parent File....</h1>
            <ol>
                {
                    arr.map((item,index)=>{
                        return(
                           <li key={index}>{item}</li> 
                        )

                    })
                }
            </ol>
            <ChildProp RE = {arr} />
        </div>
    )


}