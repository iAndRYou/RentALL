import React from "react";
import { Logo } from "./Header.style";

function Header({className}) {
    return (
        <div className={className}>
            <Logo></Logo>
        </div>
    )
  }
  
  export default Header;