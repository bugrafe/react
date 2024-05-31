import React from 'react'

//JavaScript yazilabilir

const Jsx4 = () => {

    //JavaScript yazilabilir

    const isAdmin=true;
    let content="";

    if(isAdmin){
        content=<h2>Admin User</h2>;
    }else{
        content=<h2>Customer User</h2>;
    }

  return (
    <div>{content}</div>
  )
}

export default Jsx4;