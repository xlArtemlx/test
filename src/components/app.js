import React,{useState} from "react";

export const Apps = () => {
    const [state,setState] = useState('data')

    const myClick = () => {
        const arr = [1,1,2,2,3,4,1,2,4,2,6,7,8,4]
        const newArr  = arr.filter((el)=>{
            
        })
        setState('запиши сюда newArr')
    }
    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <button onClick={myClick}>
                click
            </button>
            <span>{state}</span>
        </div>
    )
} 