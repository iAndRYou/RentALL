import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton, HeaderWrapper, ProfileButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import logo from "./assets/logo.png";
import profile from "./assets/profile.png"
import { StyledEnterCity, StyledEnterCommute, StyledLowerPrice, StyledOptionBar, StyledPriceTag, StyledSearchButton, StyledSortMethod, StyledSortMethodElement, StyledUpperPrice } from './components/OptionBar.style';
import React, {useState} from 'react';
import Apartments from './components/exampleApartments.json';
import {createApartment, sortApartments,} from './utilities/CreateApartment.js'



function App() {
  //apartments - array of objects packed in JSON, setApartments - function that changes the state of the apartments' var and rerenders the components
  const [apartments, setApartments] = useState(Apartments)
  //handles sorting of the json array
  function handleSortApartment(value){
    var copy = sortApartments(value, apartments)
    setApartments(copy)
  }
  
  return (
    <AppContainer>
      <HeaderWrapper>
        <StyledHeader>
          <Logo src={logo}></Logo>
          <AppTitle>RentALL</AppTitle>
          <ProfileButton>
            <img src={profile} width="40px"></img>
          </ProfileButton>
          <LoginButton>{"Zaloguj się"}</LoginButton>
        </StyledHeader>
          
        <StyledOptionBar>
          <StyledLowerPrice placeholder='Od'></StyledLowerPrice>
          <StyledPriceTag>Cena</StyledPriceTag>
          <StyledUpperPrice placeholder='Do'></StyledUpperPrice>
          

          <StyledSortMethod onChange={e => handleSortApartment(e.target.value)}>

            <StyledSortMethodElement value="" disabled selected>
              {"Sortuj według..."}
            </StyledSortMethodElement>

            <StyledSortMethodElement value={0}>
              {"Cena od najniższej"}
            </StyledSortMethodElement>

            <StyledSortMethodElement value={1}>
              {"Cena od najwyższej"}
            </StyledSortMethodElement>

            <StyledSortMethodElement value={2}>
              {"Czas dojazdu"}
            </StyledSortMethodElement>
            
          </StyledSortMethod>
          <StyledEnterCommute placeholder='Dojazd do...'></StyledEnterCommute>
          <StyledEnterCity placeholder='Miasto'></StyledEnterCity>
          <StyledSearchButton>Szukaj</StyledSearchButton>
        </StyledOptionBar>
      </HeaderWrapper>
      

      <StyledMainContainer>
        
        {createApartment(apartments)}
      </StyledMainContainer>
    </AppContainer>
    
  )
}


export default App;
