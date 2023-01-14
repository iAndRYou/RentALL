import React from 'react'
import { StyledAddAdvertPage } from "../components/AddAdvertPage.style";
import { StyledLoginPage } from "../components/LoginPage.style";
import { StyledProfilePage } from "../components/ProfilePage.style";
import { StyledEditAdvertPage } from "../components/EditAdvertPage.style";


///This is a file that handles rendering of pages, it is here to reduce the amount of code in App.js

export const Pages = {
    addAdvertPage: 0,
    loginPage: 1,
    profilePage: 2,
    renderApartments: 3,
    editPage: 4
}


export function handleAddAdvertPage(bool, handlePages) {
    if (bool === true) {
        return(
            <StyledAddAdvertPage handlePages={handlePages}/>
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

export function handleProfilePage(bool, handlePages) {
    if (bool === true) {
        return(
            <StyledProfilePage handlePages={handlePages}/>
        )
    }
}

export function handleEditPage(bool, handlePages) {
    if (bool === true) {
        return(
            <StyledEditAdvertPage handlePages={handlePages}/>
        )
    }
}





