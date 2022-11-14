import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton, HeaderWrapper } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import {StyledApartmentContainer} from './components/ApartmentContainer.style';
import logo from "./assets/logo.png";
import { StyledEnterCity, StyledEnterCommute, StyledLowerPrice, StyledOptionBar, StyledPriceTag, StyledSearchButton, StyledSortMethod, StyledSortMethodElement, StyledUpperPrice } from './components/OptionBar.style';
import React, {useState} from 'react';
import Apartments from './components/exampleApartments.json';

function App() {
  //const [apartments, setApartments] = useState(['1000zl', '2000zl', '2000zl', '2000zl', '2000zl']);
  //const arr = ['1000zl', '2000zl', '2000zl', '2000zl', '2000zl'];
 
  return (
    <AppContainer>
      <HeaderWrapper>
        <StyledHeader>
          <Logo src={logo}></Logo>
          <AppTitle>RentALL</AppTitle>
          <LoginButton>{"Zaloguj się"}</LoginButton>
        </StyledHeader>
          
        <StyledOptionBar>
          <StyledLowerPrice placeholder='Od'></StyledLowerPrice>

          <StyledPriceTag>Cena</StyledPriceTag>

          <StyledUpperPrice placeholder='Do'></StyledUpperPrice>

          <StyledSortMethod>

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
        {
        Apartments.map(apartment => {
          return <StyledApartmentContainer price={apartment.price} city={apartment.city} street={apartment.street} picture={apartment.picture} />
        })}
      </StyledMainContainer>
    </AppContainer>
    
  )
}

export default App;
