import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import UseEffect2 from './useeffect2'

const UseEffect1 = () => {
    
    const [message,  setMessage] = useState("Hi")
    const [error,  setError] = useState("")
    const [showComp,  setShowComp] = useState(false);


    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    !USE EFECT asekrondur , her zaman JSX render olduktan sonra çalışır
    */

    useEffect(()=>{
        console.log("MOUNTING: Buradaki kodlar sadece render da çalısır")
    },[])

    useEffect(()=>{
        console.log("UPDATE: Buradaki kodlar render ve re-render da çalısır")
    })

    useEffect(()=>{
        console.log("UPDATE: Buradaki kodlar dependency array icindeki degisken(ler) degistiğinde çalısır")
    },[error])



    
    console.log(message)
  
    return (
    <div className='mt-5 text-center'>
        {showComp && <UseEffect2/>}
        <Button onClick={()=> setMessage(Math.random())}>Set Message</Button>

        <br />
        <Button onClick={()=> setError(Math.random())}>Set Error</Button>
        <br />

        <Button onClick={()=> setShowComp((prev)=>!prev)}>Toggle Message</Button>

    </div>
  )
}

export default UseEffect1