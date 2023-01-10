import {StyledInput, StyledLoginButton, StyledFormBreak } from './LoginPage.style'
import React, { useRef } from 'react'
import {Pages} from '../utilities/HandlePages.js'
export default function LoginPage({className, handlePages, setIsLoggedIn}){
    const loginInputRef = useRef('')
    const passwordInputRef = useRef('')
    const regRepeatPasswordInputRef = useRef('')
    const regLoginInputRef = useRef('')
    const regPasswordInputRef = useRef('')
    const regEmailInputRef = useRef('')
    const regPhoneInputRef = useRef('')
    const [loginStatus, setLoginStatus] = React.useState('')
    const [registrationStatus, setRegistrationStatus] = React.useState('')
 
    function handleLoginForm (){
        const login = loginInputRef.current.value
        const password = passwordInputRef.current.value
        console.log(login)
        console.log(password)

        if(password === '' || login === ''){
            setLoginStatus('Wypełnij wszystkie pola!')
            return
        }
        //Create object that will be sent to backend
        var user = {};
        user.username = login;
        user.password = password;


        var link = "http://127.0.0.1:8000/token"
        fetch (link, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then((response) => {
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
            sessionStorage.setItem('token', data.access_token)
            setLoginStatus('Logowanie udane!') 
            setIsLoggedIn(true)
            handlePages(Pages.renderApartments)
       })
       .catch((err) => {
            console.log(err.message);
            setLoginStatus('Logowanie nie powiodło się!')
       });
    }
    
    function handleRegisterForm(){
        const fullname = regLoginInputRef.current.value
        const password = regPasswordInputRef.current.value
        const repeatPassword = regRepeatPasswordInputRef.current.value
        const email = regEmailInputRef.current.value
        const phone = regPhoneInputRef.current.value


        if(password !== repeatPassword){
            setRegistrationStatus('Podano różne hasła!')
            return
        }
        if(password === '' || repeatPassword === '' || fullname === '' || email === '' || phone === ''){
            setRegistrationStatus('Wypełnij wszystkie pola!')
            return
        }
        if(password.length < 6){
            setRegistrationStatus('Hasło musi mieć conajmniej 6 znaków!')
            return
        }
        if(phone.length !== 9){
            setRegistrationStatus('Numer telefonu musi mieć co najmniej 9 cyfr!')
            return
        }

        //Create object that will be sent to backend
        var user = {};
        user.fullname = fullname;
        user.phone_number = phone;
        user.email = email;
        user.password = password;
        
        

        console.log(JSON.stringify(user))
        var link = "http://127.0.0.1:8000/register"
        fetch (link, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, append,delete,entries,foreach,get,has,keys,set,values",
                "Content-Type": "application/json"
        },
            body: JSON.stringify(user)
        }).then((response) => {
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
            setRegistrationStatus('Rejestracja udana!')
       })
       .catch((err) => {
            console.log(err.message);
            setRegistrationStatus('Rejestracja nie powiodła się!')
       });
    }

    return(
        <div className={className}>
            <h2>Witamy ponownie!</h2>
            <h2>Logowanie</h2>
            <form>
                <label>
                    <StyledInput type="email" name="login" placeholder='E-mail' ref={loginInputRef} />
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    <StyledInput type="password" name="password" placeholder='Hasło' ref={passwordInputRef} />
                </label>
            </form>
            <br></br>
            <div>{loginStatus}</div>
            <StyledFormBreak></StyledFormBreak>
            <StyledLoginButton type="submit" 
                 onClick={e => {
                    e.preventDefault()
                    handleLoginForm()
                    }}>Zaloguj
            </StyledLoginButton>
            <StyledFormBreak></StyledFormBreak>
            <h2>Nie masz jeszcze konta?</h2>
            <h2>Rejestracja</h2>
            <form>
                <label>
                    <StyledInput type="text" name="login" placeholder='Imię i nazwisko' ref={regLoginInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    <StyledInput type="password" name="password" placeholder='Hasło' ref={regPasswordInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    <StyledInput type="password" name="password" placeholder='Powtórz hasło' ref={regRepeatPasswordInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    <StyledInput type="email" name="email" placeholder='E-mail' ref={regEmailInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    <StyledInput type="tel" name="phone" placeholder='Numer telefonu' ref={regPhoneInputRef}/>
                </label>
            </form>
            <br></br>
            <div>{registrationStatus}</div>
            <StyledFormBreak></StyledFormBreak>
            <StyledLoginButton type="submit" 
                    onClick={e => {
                        e.preventDefault()
                        handleRegisterForm()
                        }}>Zarejestruj
            </StyledLoginButton>
        </div>
    )
}

