import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import {StyledApartmentContainer} from './components/ApartmentContainer.style';
import logo from "./assets/logo.png";
import React, {useState} from 'react';

function App() {
  const [apartments, setApartments] = useState(['1000zl', '2000zl', '2000zl', '2000zl', '2000zl']);

  return (

    <AppContainer>
      <StyledHeader>
        <Logo src={logo}></Logo>
        <AppTitle>RentALL</AppTitle>
        <LoginButton>{"Zaloguj się"}</LoginButton>
      </StyledHeader>

      <StyledMainContainer>
        {
        apartments.map(price => {
          return <StyledApartmentContainer price={price}/>
        })}
      </StyledMainContainer>
    </AppContainer>
    
  )
}

export default App;
