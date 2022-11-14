import React from 'react'
import {Searchbar} from '../../common';
import './Header.css';
import logo from "../../../images/tlogo.png"

function Header() {
  return (
    <div className='header'>
        Header
        <div className='header-top'>
            <div className='logo-box'>
                <div className='logo'>
                    <img className='logo-img' src={logo} width="125px" height="100px"  alt="logo"></img>
                </div>
            </div>
            <div className='login-box'>
                {/*<Login />*/}
            </div>
        </div>
        
        <div className='header-bottom'>
            <div className='searchbar'>
                {<Searchbar />}
            </div>
        </div>
    </div>
  )
}

export default Header;