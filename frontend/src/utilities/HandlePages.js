import React from 'react'
import { StyledAddAdvertPage } from "../components/AddAdvertPage.style";


///This is a file that handles rendering of pages, it is here to reduce the amount of code in App.js

export const Pages = {
    addAdvertPage: 0,
    loginPage: 1,
    registerPage: 2,
    renderApartments: 3
}


export function handleAddAdvertPage(bool) {
    if (bool === true) {
        return(
            <StyledAddAdvertPage/>
        )
    }
}

export function handleLoginPage(bool) {
    if (bool === true) {
        return(
            //<StyledLoginPage/>
            null
        )
    }
}

export function handleRegisterPage(bool) {
    if (bool === true) {
        return(
           //<StyledRegisterPage/>
           null
        )
    }
}


