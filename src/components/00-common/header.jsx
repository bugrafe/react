import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import StoreContext from '../../store';
import CurrencyList from '../27-currencies/currency-list';
const Header = () => {

  return (
    <div className="p-4 text-center bg-info d-flex justify-content-between align-items-center">
        <h1>React Practises</h1>
        <CurrencyList/>
    </div>
  )
}
export default Header