import {StyledInput, StyledLoginButton, StyledFormBreak } from './LoginPage.style'
import React, { useRef } from 'react'
import {Pages} from '../utilities/HandlePages.js'
import {setUserID, setSessionToken} from '../utilities/GlobalVariables.js'
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
        user.login = login;
        user.password = password;


        //TODO: fetch cos tam cos tam
        setLoginStatus('Logowanie udane!') // albo
        //setLoginStatus('Login failed!') 
    
        setIsLoggedIn(true)
        handlePages(Pages.renderApartments)
        
    }
    
    function handleRegisterForm(){
        const login = regLoginInputRef.current.value
        const password = regPasswordInputRef.current.value
        const repeatPassword = regRepeatPasswordInputRef.current.value
        const email = regEmailInputRef.current.value
        const phone = regPhoneInputRef.current.value
        console.log(login)
        console.log(password)
        console.log(repeatPassword)

        if(password !== repeatPassword){
            setRegistrationStatus('Podano różne hasła!')
            return
        }
        if(password === '' || repeatPassword === '' || login === ''){
            setRegistrationStatus('Wypełnij wszystkie pola!')
            return
        }

        //Create object that will be sent to backend
        var user = {};
        user.login = login;
        user.password = password;

        //TODO: fetch cos tam cos tam

        setRegistrationStatus('Rejestracja nieudana!') // albo
        //setRegistrationStatus('Registration failed!')


    }

    return(
        <div className={className}>
            <h2>Witamy ponownie!</h2>
            <h2>Logowanie</h2>
            <form>
                <label>
                    <StyledInput type="text" name="login" placeholder='Login' ref={loginInputRef} />
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
                    }}>Log in
            </StyledLoginButton>
            <StyledFormBreak></StyledFormBreak>
            <h2>Nie masz jeszcze konta?</h2>
            <h2>Rejestracja</h2>
            <form>
                <label>
                    <StyledInput type="text" name="login" placeholder='Login' ref={regLoginInputRef}/>
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
                    <StyledInput type="email" name="email" placeholder='E-mail' ref={regRepeatPasswordInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    <StyledInput type="tel" name="phone" placeholder='Numer telefonu' ref={regRepeatPasswordInputRef}/>
                </label>
            </form>
            <br></br>
            <div>{registrationStatus}</div>
            <StyledFormBreak></StyledFormBreak>
            <StyledLoginButton type="submit" 
                    onClick={e => {
                        e.preventDefault()
                        handleRegisterForm()
                        }}>Register
            </StyledLoginButton>
        </div>
    )
}

