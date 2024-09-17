import { useEffect, useState } from "react";

export function useFetch(api){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch(api)
        .then((res)=>{return res.json()})
        .then((data)=>{setData(data)});
    },[api]);

    return [data];
}