import React from 'react'
import "./Header.css"
import TemporaryDrawer from './Drawer'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='logo'>CryptoTracker<span style={{color:'var(--blue)'}}>.</span></h1>
        <div className='navbar'>
           <NavLink className='link' to='/'>Home</NavLink>
           <NavLink className='link' to='/compare'>Compare</NavLink>
           <NavLink className='link' to='/watchlist'>Watchlist</NavLink>
           <NavLink to='/dashboard'>
           <Button text="Dashboard" onClick={()=>{console.log("clicked")}}/>
           </NavLink>
        </div>
        <div className='mobile-drawer'>
            <TemporaryDrawer/>
        </div>
    </div>
  )
}

export default Header