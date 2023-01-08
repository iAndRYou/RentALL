import {StyledInput, StyledLoginButton } from './LoginPage.style'
import React, { useRef } from 'react'
export default function LoginPage({className}){
    const loginInputRef = useRef('')
    const passwordInputRef = useRef('')
    const regRepeatPasswordInputRef = useRef('')
    const regLoginInputRef = useRef('')
    const regPasswordInputRef = useRef('')
    const [loginStatus, setLoginStatus] = React.useState('')
    const [registrationStatus, setRegistrationStatus] = React.useState('')

    function handleLoginForm(){
        const login = loginInputRef.current.value
        const password = passwordInputRef.current.value
        console.log(login)
        console.log(password)

        //TODO: fetch cos tam cos tam
        setLoginStatus('Login successful!') // albo
        //setLoginStatus('Login failed!') 
    }
    
    function handleRegisterForm(){
        const login = regLoginInputRef.current.value
        const password = regPasswordInputRef.current.value
        const repeatPassword = regRepeatPasswordInputRef.current.value
        console.log(login)
        console.log(password)
        console.log(repeatPassword)

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

