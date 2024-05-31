import React from 'react'

const Jsx6 = () => {
    const users = [
        { id: 1, firstName: "John", lastName: "Doe" },
        { id: 2, firstName: "Susan", lastName: "Doe" },
        { id: 3, firstName: "Alice", lastName: "Doe" },
        { id: 4, firstName: "Michael", lastName: "Doe" },
        { id: 5, firstName: "Josheph", lastName: "Doe" },
    ];


    //JS NORMAL

    /* let strUsers="";
    users.forEach((u)=>{
        strUsers+=`<li>${u.firstName} ${u.lastName}</li>`
    });
    document.getElementById("list").innerHTML = strUsers; */


    //JSX yapılarında geriye deger donduren iteration methodlari kullanilir.
    
    // Map kullanildiginda mutlaka map icindeki parent elemana unique key degeri verilmelidir
   
  return (
    <ul>
        {users.map((u)=>
            <li key={u.id}>
                {u.firstName} {u.lastName}
            </li>)}
    </ul>
)}

export default Jsx6