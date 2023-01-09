import React from 'react'
import { StyledAddAdvertPage } from "../components/AddAdvertPage.style";
import { StyledLoginPage } from "../components/LoginPage.style";
import { StyledProfilePage } from "../components/ProfilePage.style";


///This is a file that handles rendering of pages, it is here to reduce the amount of code in App.js

export const Pages = {
    addAdvertPage: 0,
    loginPage: 1,
    profilePage: 2,
    renderApartments: 3
}


export function handleAddAdvertPage(bool) {
    if (bool === true) {
        return(
            <StyledAddAdvertPage/>
        )
    }
}

export function handleLoginPage(bool, handlePages, setIsLoggedIn) {
    if (bool === true) {
        return(
            <StyledLoginPage handlePages={handlePages} setIsLoggedIn={setIsLoggedIn}/>
        )
    }
}

export function handleProfilePage(bool) {
    if (bool === true) {
        return(
            <StyledProfilePage/>
        )
    }
}




