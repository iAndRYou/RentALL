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
        }).then(response => {
            if (!response.ok){ 
                setLoginStatus('Logowanie nieudane!')
                return response.json();
            }
        }).then((data) => {
            console.log(data);
            sessionStorage.setItem('token', data.access_token);
        })

        setLoginStatus('Logowanie udane!') // albo
        setIsLoggedIn(true)
        handlePages(Pages.renderApartments)
        
    }
    
    function handleRegisterForm(){
        const fullname = regLoginInputRef.current.value
        const password = regPasswordInputRef.current.value
        const repeatPassword = regRepeatPasswordInputRef.current.value
        const email = regEmailInputRef.current.value
        const phone = regPhoneInputRef.current.value

        console.log(password)
        console.log(repeatPassword)

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

        //Create object that will be sent to backend
        var user = {};
        user.fullname = fullname;
        user.password = password;
        user.email = email;
        user.phone = phone;

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

