import { useEffect, useState } from "react"

const useDash = ()  => {
        const [dash, setDash] =useState([]);
        useEffect(()=>{
                fetch('data.json')
                .then(res => res.json())
                .then( data =>setDash(data))
        },[]);
        return [dash, setDash];
}
export default useDash;