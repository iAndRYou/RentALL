import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton, HeaderWrapper, ProfileButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import logo from "./assets/logo.png";
import profile from "./assets/profile.png"
import { StyledEnterCity, StyledEnterCommute, StyledLowerPrice, StyledOptionBar, StyledPriceTag, StyledSearchButton, StyledSortMethod, StyledSortMethodElement, StyledUpperPrice } from './components/OptionBar.style';
import React, {useState, useEffect} from 'react';
import exampleApartments from './components/exampleApartments.json';
import {createApartment, sortApartments,} from './utilities/CreateApartment.js'
import { StyledAddAdvertButton, StyledAddAdvertPage } from './components/AddAdvertPage.style';
import * as hp from './utilities/HandlePages.js';



function App() {
  const [lowerPrice, setLowerPrice] = useState('');
  const [upperPrice, setUpperPrice] = useState('');
  const [city, setCity] = useState('');
  const [commute, setCommute] = useState('');
  // useState hook for adding appartments
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  async function getApartmentsJson(lowerPrice, upperPrice, city, commute, debug) {
    handlePages(hp.Pages.renderApartments);
    if(lowerPrice === ""){lowerPrice = "0.0"}
    if(upperPrice === ""){upperPrice = "99999999.0"}
    // TODO: Make a call to the backend to get the apartments
    var link = 'http://127.0.0.1:8000/adverts?lower_price_bound='+lowerPrice+'&upper_price_bound='+upperPrice;
    await fetch(link)
        .then((response) => {
            if(response.ok) {
              console.log('Everything went ok: ' + response.status)
              return response.json()
            }else{
              throw new Error('Something went wrong ... \n' + response.status);
            }
          }
          )
        .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          if(debug === true){
            setPosts(exampleApartments)
          }else{
            setPosts(null)
          }
          console.log(err.message);
       });

    setLowerPrice('');
    setUpperPrice('');
    setCity('');
    setCommute('');
    // TODO: Return apartments got from the backend
    return null;
  }


  //handles sorting of the json array
  function handleSortApartment(sorting_method){
    var copy = sortApartments(sorting_method, posts)
    setPosts(copy)
  }

  //creates new apartment in backend
  function handleAddAdvert(price, details, city, commute, image) {
     // call to backend to add the advert

    handlePages(hp.Pages.renderApartments);
  }

  // all the pages boolean variables
  const [addAdvertPage, setAddAdvertPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [renderApartments, setRenderApartments] = useState(true);
  const [editPage, setEditPage] = useState(false);
 
  // Pages handling
  // It sets only one of the pages to true and the rest to false
  // It is used to render only one page at a time
function handlePages(page){
  if(page === hp.Pages.addAdvertPage){
      setRenderApartments(false);
      setLoginPage(false);
      setProfilePage(false);
      setEditPage(false);
      setAddAdvertPage(true);
  }
  else if(page === hp.Pages.loginPage){
      setRenderApartments(false);
      setAddAdvertPage(false);
      setProfilePage(false);
      setEditPage(false);
      setLoginPage(true);
  }
  else if(page === hp.Pages.profilePage){
      setRenderApartments(false);
      setAddAdvertPage(false);
      setLoginPage(false);
      setEditPage(false);
      setProfilePage(true);
  }
  else if(page === hp.Pages.editPage){
      setRenderApartments(false);
      setAddAdvertPage(false);
      setLoginPage(false);
      setProfilePage(false);
      setEditPage(true);
  }
  else if(page === hp.Pages.renderApartments){
      setAddAdvertPage(false);
      setLoginPage(false);
      setProfilePage(false);
      setEditPage(false);
      setRenderApartments(true);
  } 
  else{
      setAddAdvertPage(false);
      setLoginPage(false);
      setProfilePage(false);
      setEditPage(false);
      setRenderApartments(false);
  }
}

function handleLogInOutButton(){
  if(isLoggedIn){
    return(
      <LoginButton type='submit'
        onClick={() => {
          logOut();
        }}>{"Wyloguj się"}
      </LoginButton>
    )
  }
  else{
    return(
      <LoginButton type='submit'
        onClick={() => {
          if(!loginPage){handlePages(hp.Pages.loginPage)
          }else{handlePages(hp.Pages.renderApartments)}
        }}>{"Zaloguj się"}
      </LoginButton>
    )
  }
}

function logOut(){
  setIsLoggedIn(false);
  sessionStorage.removeItem("token");
  handlePages(hp.Pages.plain);
}
// End of pages handling  

  return (
    <AppContainer>
      <HeaderWrapper>
        <StyledHeader>
          <Logo src={logo} onClick = {() => {
            handlePages(hp.Pages.plain);
          }}></Logo>
          <AppTitle onClick={() => {
            handlePages(hp.Pages.plain);
          }}>RentALL</AppTitle>
          <ProfileButton type='submit'
                  onClick={() => {
                  if(!isLoggedIn){
                    if(!loginPage){handlePages(hp.Pages.loginPage)
                    }else{handlePages(hp.Pages.renderApartments)}
                  }
                  else{
                    if(!profilePage){handlePages(hp.Pages.profilePage)
                    }else{handlePages(hp.Pages.renderApartments)}
                  }
                  }}>
            <img 
              src={profile} 
              width="40px"
            ></img>
          </ProfileButton>
          {handleLogInOutButton()}
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

            <StyledSortMethodElement 
              value={3}
            >{"Punkty RentALL"}
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
            onClick={() => getApartmentsJson(lowerPrice, upperPrice, city, commute, true/*debug*/)}

          >Szukaj</StyledSearchButton>
        </StyledOptionBar>
      </HeaderWrapper>
      
      {/*here we handle every page on the website, if one of them is toggled, the handlePages function disables the rest of them
        What is to be rendered is determined by the createApartment function and handle- functions in the HandlePages.js file.
        Everything that needs to be in those containers should be in those handle- functions
      */}
      <StyledMainContainer>
        {createApartment(posts, renderApartments)}
        {hp.handleAddAdvertPage(addAdvertPage, handlePages)}
        {hp.handleLoginPage(loginPage, handlePages, setIsLoggedIn)}
        {hp.handleProfilePage(profilePage, handlePages)}
        {hp.handleEditPage(editPage, handlePages)}
      </StyledMainContainer>
      
      <StyledAddAdvertButton
        type='submit'
        onClick={() => {
          if(!isLoggedIn){
            if(!loginPage){handlePages(hp.Pages.loginPage)}
            else{handlePages(hp.Pages.renderApartments)}
          }
          else{
            if(!addAdvertPage){handlePages(hp.Pages.addAdvertPage)
            }else{handlePages(hp.Pages.renderApartments)}
          }
        }}
      > {"+"}
      </StyledAddAdvertButton>
      
    </AppContainer>
    
  )
}
export default App;
