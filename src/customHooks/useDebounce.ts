import { useState, useEffect } from "react";

function useDebounce(value:string,delay:any){

    const [debounceVal,setDebounceVal] = useState(value);
    
    useEffect(()=>{

        const timer = setTimeout(()=>{
            setDebounceVal(value)
        },delay);

        return ()=> clearTimeout(timer);

    },[value,delay])

    return debounceVal;
}

export default useDebounce;