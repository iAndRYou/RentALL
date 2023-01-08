import {StyledInput } from './LoginPage.style'
import React, { useRef } from 'react'
export default function LoginPage({className}){
    const loginInputRef = useRef()
    const passwordInputRef = useRef()
    const repeatedPasswordInputRef = useRef()

    function handleLoginForm(){
        const login = loginInputRef.current.value
        const password = passwordInputRef.current.value
        console.log(login)
        console.log(password)
    }
    
    function handleRegisterForm(){
        const login = loginInputRef.current.value
        const password = passwordInputRef.current.value
        const repeatPassword = repeatedPasswordInputRef.current.value
        console.log(login)
        console.log(password)
        console.log(repeatPassword)
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
                <button type="submit" 
                 onClick={e => {
                    e.preventDefault()
                    handleLoginForm()
                    }}>Log in</button>
                <br></br>
            </form>
            <h2>Or...</h2>
            <h2>Register</h2>
            <form>
                <label>
                    Login:
                    <StyledInput type="text" name="login" placeholder='Enter new login' ref={loginInputRef}/>
                </label>
                <br></br>
                <label>
                    Password:
                    <StyledInput type="password" name="password" placeholder='Enter new password' ref={passwordInputRef}/>
                </label>
                <br></br>
                <label>
                    Repeat password:
                    <StyledInput type="password" name="password" placeholder='Repeat new password' ref={repeatedPasswordInputRef}/>
                </label>
                <button type="submit" 
                    onClick={e => {
                        e.preventDefault()
                        handleRegisterForm()
                        }}>Register</button>
            </form>
        </div>
    )
}

