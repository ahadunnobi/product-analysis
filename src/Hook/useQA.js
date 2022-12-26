import { useEffect, useState } from "react"

const useQA = ()  => {
        const [items, setQA] =useState([]);
        useEffect(()=>{
                fetch('Q&A.JSON')
                .then(res => res.json())
                .then( data =>setQA(data))
        },[]);
        return [items, setQA];
}
export default useQA;