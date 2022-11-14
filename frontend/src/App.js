import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
import {StyledApartmentContainer} from './components/ApartmentContainer.style';
import logo from "./assets/logo.png";

function App() {
  return (
    <AppContainer>
      <StyledHeader>
        <Logo src={logo}></Logo>
        <AppTitle>RentALL</AppTitle>
        <LoginButton>{"Zaloguj się"}</LoginButton>
      </StyledHeader>

      <StyledMainContainer>
        <StyledApartmentContainer/>
        <StyledApartmentContainer/>
        <StyledApartmentContainer/>
        <StyledApartmentContainer/>
        <StyledApartmentContainer/>
        <StyledApartmentContainer/>
        <StyledApartmentContainer/>
      </StyledMainContainer>
    </AppContainer>
  )
}

export default App;
