import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Event2 = () => {
    
    const handleClick=(name)=>{
        alert(`Hello ${name}`)
    }

    // Event listener lara handler atanirken - onClick={sayHello} - 
    // bu sekilde parantez kullanilmaz  - onClick={sayHello()} - 
    // kullanilirsa fonksiyon hemen cagriir
  
    return (
    <Container className='mt-5'>
        <Button variant='secondary' onClick={()=>handleClick("John")}>Say Hello</Button>
    </Container>
  )
}

export default Event2