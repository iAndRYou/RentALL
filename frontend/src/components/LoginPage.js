import {StyledInput, StyledLoginButton } from './LoginPage.style'
import React, { useRef } from 'react'
import {Pages} from '../utilities/HandlePages.js'
import {setUserID, setSessionToken} from '../utilities/GlobalVariables.js'
export default function LoginPage({className, handlePages, setIsLoggedIn}){
    const loginInputRef = useRef('')
    const passwordInputRef = useRef('')
    const regRepeatPasswordInputRef = useRef('')
    const regLoginInputRef = useRef('')
    const regPasswordInputRef = useRef('')
    const [loginStatus, setLoginStatus] = React.useState('')
    const [registrationStatus, setRegistrationStatus] = React.useState('')
    
 
    function handleLoginForm (){
        const login = loginInputRef.current.value
        const password = passwordInputRef.current.value
        console.log(login)
        console.log(password)

        if(password === '' || login === ''){
            setLoginStatus('Please fill all fields!')
            return
        }
        //Create object that will be sent to backend
        var user = {};
        user.login = login;
        user.password = password;


        //TODO: fetch cos tam cos tam
        setLoginStatus('Login successful!') // albo
        //setLoginStatus('Login failed!') 
    
        setUserID(2137)
        setSessionToken(6969)
        setIsLoggedIn(true)
        handlePages(Pages.renderApartments)
        
    }
    
    function handleRegisterForm(){
        const login = regLoginInputRef.current.value
        const password = regPasswordInputRef.current.value
        const repeatPassword = regRepeatPasswordInputRef.current.value
        console.log(login)
        console.log(password)
        console.log(repeatPassword)

        if(password !== repeatPassword){
            setRegistrationStatus('Passwords do not match!')
            return
        }
        if(password === '' || repeatPassword === '' || login === ''){
            setRegistrationStatus('Please fill all fields!')
            return
        }

        //Create object that will be sent to backend
        var user = {};
        user.login = login;
        user.password = password;

        //TODO: fetch cos tam cos tam

        setRegistrationStatus('Registration successful!') // albo
        //setRegistrationStatus('Registration failed!')


    }

    return(
        <div className={className}>
            <h2>Do you have an account?</h2>
            <h2>Log in</h2>
            <form>
                <label>
                    Login:
                    <StyledInput type="text" name="login" placeholder='Enter login' ref={loginInputRef} />
                </label>
                <br></br>
                <label>
                    Password:
                    <StyledInput type="password" name="password" placeholder='Enter password' ref={passwordInputRef} />
                </label>
                <br></br>
                <StyledLoginButton type="submit" 
                 onClick={e => {
                    e.preventDefault()
                    handleLoginForm()
                    }}>Log in</StyledLoginButton>
                <br></br>
            </form>
            <div>{loginStatus}</div>
            <h2>Or...</h2>
            <h2>Register</h2>
            <form>
                <label>
                    Login:
                    <StyledInput type="text" name="login" placeholder='Enter new login' ref={regLoginInputRef}/>
                </label>
                <br></br>
                <label>
                    Password:
                    <StyledInput type="password" name="password" placeholder='Enter new password' ref={regPasswordInputRef}/>
                </label>
                <br></br>
                <label>
                    Repeat password:
                    <StyledInput type="password" name="password" placeholder='Repeat new password' ref={regRepeatPasswordInputRef}/>
                </label>
                <StyledLoginButton type="submit" 
                    onClick={e => {
                        e.preventDefault()
                        handleRegisterForm()
                        }}>Register</StyledLoginButton>
            </form>
            <div>{registrationStatus}</div>
        </div>
    )
}

