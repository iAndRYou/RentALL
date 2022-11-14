import React from "react";
import logo from "../assets/logo.png";
import { AppTitle, LoginButton, Logo } from "./Header.style";

function Header({className}) {
    return (
        <div className={className}>
            <Logo src={logo}></Logo>
            <AppTitle>RentALL</AppTitle>
            <LoginButton>{"Zaloguj się!"}</LoginButton>
        </div>
    )
  }
  
  export default Header;