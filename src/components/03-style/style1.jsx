import React from 'react'

const Style1 = () => {

    const isRadius=true;
    const padding="20px";

  return (
    <div>
        <h1>Styles</h1>
        <h2 style={{color:"red", fontSize:"1.5rem",
        textShadow:"3px 3px 5px black",border:"1px solid gray",
        padding,borderRadius: isRadius ? "30px" :"0px"}}>
            Inline style</h2>
    </div>
  )
}

export default Style1