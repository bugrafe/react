import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import StoreContext from '../../store';
const Header = () => {

  const context=useContext(StoreContext);

  return (
    <div className="p-4 text-center" style={{backgroundColor:context.color}}>
        <h1>React Practises</h1>
    </div>
  )
}
export default Header