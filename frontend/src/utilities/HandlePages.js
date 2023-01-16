import React from 'react'
import { StyledAddAdvertPage } from "../components/AddAdvertPage.style";
import { StyledLoginPage } from "../components/LoginPage.style";
import { StyledProfilePage } from "../components/ProfilePage.style";
import { StyledEditAdvertPage } from "../components/EditAdvertPage.style";


///This is a file that handles rendering of pages, it is here to reduce the amount of code in App.js

///The pages are rendered by using the handlePages function in App.js

///functions in this file also pass on required functions and states to the pages that are rendered 

/**
 * Enum for the different pages
 */
export const Pages = {
    addAdvertPage: 0,
    loginPage: 1,
    profilePage: 2,
    renderApartments: 3,
    editPage: 4,
    plain: 5
}

/**
 * Function that handles the rendering of the add advert page
 * @param {*} bool - boolean that determines if the page should be rendered or not
 * @param {*} handlePages - function that handles the rendering of the pages
 * @returns - the add advert page
 */
export function handleAddAdvertPage(bool, handlePages) {
    if (bool === true) {
        return(
            <StyledAddAdvertPage handlePages={handlePages}/>
        )
    }
}

/**
 * Function that handles the rendering of the login page
 * @param {*} bool - boolean that determines if the page should be rendered or not
 * @param {*} handlePages - function that handles the rendering of the pages
 * @param {*} setIsLoggedIn - function that sets the isLoggedIn state
 * @returns - the login page
 */
export function handleLoginPage(bool, handlePages, setIsLoggedIn) {
    if (bool === true) {
        return(
            <StyledLoginPage handlePages={handlePages} setIsLoggedIn={setIsLoggedIn}/>
        )
    }
}

/**
 * Function that handles the rendering of the profile page
 * @param {*} bool - boolean that determines if the page should be rendered or not
 * @param {*} handlePages - function that handles the rendering of the pages 
 * @returns - the profile page
 */
export function handleProfilePage(bool, handlePages) {
    if (bool === true) {
        return(
            <StyledProfilePage handlePages={handlePages}/>
        )
    }
}

/**
 * Function that handles the rendering of the edit advert page
 * @param {*} bool - boolean that determines if the page should be rendered or not
 * @param {*} handlePages - function that handles the rendering of the pages
 * @returns - the edit advert page
 */
export function handleEditPage(bool, handlePages) {
    if (bool === true) {
        return(
            <StyledEditAdvertPage handlePages={handlePages}/>
        )
    }
}





