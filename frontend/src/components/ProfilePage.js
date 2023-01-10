import React from 'react'
import { StyledUserAdvert, StyledDeleteButton, StyledEditButton, StyledImageProfile } from "../components/ProfilePage.style";
import exampleApartments from './exampleApartments.json';

export default function ProfilePage({className}){
    const [userAdverts, setUserAdverts] = React.useState([])

    function getUserAdverts(debug){
        //fetch user adverts

        if(debug && userAdverts.length === 0){
            setUserAdverts(exampleApartments)
        }

        if(userAdverts.length === 0){
            return(
                <div>
                    Nie masz żadnych ogłoszeń
                </div>
            )
        }
        else{
            return(
                showApartments()
            )
        }
    }

    function showApartments(){
        return userAdverts.map((apartment, index) => {
            return(
                // container with apartment
                // edit button that knows its index in userAdverts array
                // delete button that knows its index in userAdverts array
                <StyledUserAdvert>
                    <StyledImageProfile src={apartment.images}></StyledImageProfile>
                    <h3>{apartment.title}</h3>
                    <p>{apartment.price}</p>
                    <StyledEditButton index={index}>Edit</StyledEditButton>
                    <br></br>
                    <StyledDeleteButton index={index}>Delete</StyledDeleteButton>
                </StyledUserAdvert>
            )
        })
    }

    return(
        <div className={className}>
            {getUserAdverts(true/*debug*/)}
        </div>
    )

}