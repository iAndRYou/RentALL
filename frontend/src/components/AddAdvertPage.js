import {StyledInput, StyledLoginButton } from './LoginPage.style'
import React, { useRef } from 'react'
export default function AddAdvertPage(){

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
                        
                        }}>Register</StyledLoginButton>
            </form>
            <div>{registrationStatus}</div>
        </div>
    )
}