import { AppContainer } from './components/AppContainer.style';
import { Logo, StyledHeader, AppTitle, LoginButton } from './components/Header.style';
import {StyledMainContainer} from './components/MainContainer.style';
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

      </StyledMainContainer>
    </AppContainer>
  )
}

export default App;
