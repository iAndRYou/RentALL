import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import logo from "./assets/logo.png";
import React, {useState} from 'react';
import Apartments from './components/exampleApartments.json';
import {createApartment} from './utilities/CreateApartment.js'

function App() {
  //const [apartments, setApartments] = useState(['1000zl', '2000zl', '2000zl', '2000zl', '2000zl']);
  //const arr = ['1000zl', '2000zl', '2000zl', '2000zl', '2000zl'];
 
  return (
    <AppContainer>
      <StyledHeader>
        <Logo src={logo}></Logo>
        <AppTitle>RentALL</AppTitle>
        <LoginButton>{"Zaloguj się"}</LoginButton>
      </StyledHeader>

      <StyledMainContainer>
        {createApartment(Apartments)}
      </StyledMainContainer>
    </AppContainer>
    
  )
}

export default App;
