import React from 'react'
import { StyledUserAdvert, StyledDeleteButton, StyledEditButton, StyledImageProfile } from "../components/ProfilePage.style";
import exampleApartments from './exampleApartments.json';

export default function ProfilePage({className}){
    const [userAdverts, setUserAdverts] = React.useState([])


    function getUserAdverts(debug){
        //fetch user adverts
        console.log("Fetching user adverts")
        if(debug && userAdverts.length === 0){
            setUserAdverts(exampleApartments)
        }

        if(userAdverts.length === 0){
            console.log("No user adverts")
            return(
                <div>
                    Nie masz żadnych ogłoszeń
                </div>
            )
        }
        else{
            console.log("User adverts found")
            return(
                renderApartments()
            )
        }
    }

    function renderApartments(){
        return userAdverts.map((apartment, index) => {
            return(
                // container with apartment
                // edit button that knows its index in userAdverts array
                // delete button that knows its index in userAdverts array
                <StyledUserAdvert>
                    <StyledImageProfile src={apartment.images}></StyledImageProfile>
                    <h2>{apartment.title}</h2>
                    <h3>{apartment.city}, {apartment.street}</h3>
                    <h3>{apartment.price} zł / miesiąc</h3>
                    <StyledEditButton index={index}>Edytuj</StyledEditButton>
                    <br></br>
                    <StyledDeleteButton index={index}>Usuń</StyledDeleteButton>
                </StyledUserAdvert>
            )
        })
    }

    return(
        <div className={className}>
            <div>
                <h1 color='gray'>Twoje ogłoszenia</h1>
            </div>
            {getUserAdverts(true/*debug*/)}
        </div>
    )

}