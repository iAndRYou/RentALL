import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton, HeaderWrapper, ProfileButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import logo from "./assets/logo.png";
import profile from "./assets/profile.png"
import { StyledEnterCity, StyledEnterCommute, StyledLowerPrice, StyledOptionBar, StyledPriceTag, StyledSearchButton, StyledSortMethod, StyledSortMethodElement, StyledUpperPrice } from './components/OptionBar.style';
import React, {useState, useEffect} from 'react';
import Apartments from './components/exampleApartments.json';
import {createApartment, sortApartments,} from './utilities/CreateApartment.js'



function App() {

  const [lowerPrice, setLowerPrice] = useState('');
  const [upperPrice, setUpperPrice] = useState('');
  const [city, setCity] = useState('');
  const [commute, setCommute] = useState('');
  const [posts, setPosts] = useState([]);

 

  function getApartmentsJson(lowerPrice, upperPrice, city, commute) {

    // TODO: Make a call to the backend to get the apartments
    fetch('http://127.0.0.1:8000/adverts')
        .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
    setApartments(posts);
    setLowerPrice('');
    setUpperPrice('');
    setCity('');
    setCommute('');
    // TODO: Return apartments got from the backend
    return null;
  }

  //apartments - array of objects packed in JSON, setApartments - function that changes the state of the apartments' var and rerenders the components
  const [apartments, setApartments] = useState([])

  //handles sorting of the json array
  function handleSortApartment(sorting_method){
    var copy = sortApartments(sorting_method, apartments)
    setApartments(copy)
  }
  
  return (
    <AppContainer>
      {console.log("yooooo"+posts)}
      <HeaderWrapper>
        <StyledHeader>
          <Logo src={logo}></Logo>
          <AppTitle>RentALL</AppTitle>
          <ProfileButton>
            <img 
              src={profile} 
              width="40px"
            ></img>
          </ProfileButton>
          <LoginButton>{"Zaloguj się"}</LoginButton>
        </StyledHeader>
          
        <StyledOptionBar>
          <StyledLowerPrice 
            placeholder='Od'
            type='number'
            min='0'
            value={lowerPrice}
            onChange={e => setLowerPrice(e.target.value)}
          ></StyledLowerPrice>
          <StyledPriceTag>Cena</StyledPriceTag>
          <StyledUpperPrice 
            placeholder='Do'
            type='number'
            min='0'
            value={upperPrice}
            onChange={e => setUpperPrice(e.target.value)}
          ></StyledUpperPrice>
          

          <StyledSortMethod onChange={e => handleSortApartment(e.target.value)}>

            <StyledSortMethodElement 
              value="" 
              disabled 
              selected
            >{"Sortuj według..."}
            </StyledSortMethodElement>

            <StyledSortMethodElement 
              value={0}
            >{"Cena od najniższej"}
            </StyledSortMethodElement>

            <StyledSortMethodElement 
              value={1}
              >{"Cena od najwyższej"}
            </StyledSortMethodElement>

            <StyledSortMethodElement 
              value={2}
            >{"Czas dojazdu"}
            </StyledSortMethodElement>
            
          </StyledSortMethod>
          <StyledEnterCommute 
            placeholder='Dojazd do...'
            type='text'
            value={commute}
            onChange={e => setCommute(e.target.value)}
          ></StyledEnterCommute>
          <StyledEnterCity 
            placeholder='Miasto'
            type='text'
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          ></StyledEnterCity>
          <StyledSearchButton
            type='submit'

            // here we call for backend to get the apartments
            onClick={() => getApartmentsJson(lowerPrice, upperPrice, city, commute)}

          >Szukaj</StyledSearchButton>
        </StyledOptionBar>
      </HeaderWrapper>
      

      <StyledMainContainer>
        {createApartment(apartments)}
      </StyledMainContainer>
    </AppContainer>
    
  )
}


export default App;
