import React from 'react'

const Style2 = () => {

    const isRadius=true;
    const padding="20px";

    const titleStyle={
      color:"red",
      fontSize:"1.5rem",
      textShadow:"3px 3px 5px black",
      border:"1px solid gray",
      padding,
      borderRadius: isRadius ? "30px" :"0px"
    }

  return (
    <div>
        <h1>Styles</h1>
        <h2 style={titleStyle}>Internal style</h2>
        <h2 style={titleStyle}>Other Styles</h2>
    </div>
  )
}

export default Style2;