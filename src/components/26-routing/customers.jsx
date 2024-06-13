import React from 'react'
import { Link } from 'react-router-dom'

const Customers = () => {
  return (
    <div>
        <ul>
            <li><Link to={"/costomers/45"}>John Doe</Link></li>
            <li><Link to={"/costomers/33"}>Barbara Stone</Link></li>
            <li><Link to={"/costomers/71"}>Michael White</Link></li>        
        </ul>
    </div>
  )
}

export default Customers