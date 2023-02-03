import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assests/logo.png'
import search  from '../../assests/search-solid.svg'
import Avatar from '../../component/Avatar/Avatar'

import './Navbar.css'
const Navbar = () => {


  const User = null 
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt= 'logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Product</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form >
            <input type="text" placeholder='Search...' />
            <img src={search} alt="search" width="18" className='search-icon'/>
        </form>
        { User === null ?
           <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
           <>
               <Link to='/User' style={{color:'white', textDecoration : 'none'}} ><Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>M</Avatar></Link>
               <button className='nav-item nav-links'>Log out</button>
           </>
        }
      </div>
    </nav>
  )
}

export default Navbar
