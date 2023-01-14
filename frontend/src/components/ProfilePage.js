import React from 'react'
import { StyledUserAdvert, StyledDeleteButton, StyledEditButton, StyledImageProfile } from "../components/ProfilePage.style";
import exampleApartments from './exampleApartments.json';
import { Pages } from '../utilities/HandlePages';
export default function ProfilePage({className, handlePages}){
    const [userAdverts, setUserAdverts] = React.useState([])
    


    function fetchAdverts(debug){
        console.log("Fetching user adverts")

        //debug
        if(debug){
            setUserAdverts(exampleApartments)
            return
        }

        var link = "http://127.0.0.1:8000/adverts/me"
        fetch(link,  {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, append,delete,entries,foreach,get,has,keys,set,values",
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token_type") + " " + sessionStorage.getItem('token')
        }})
        .then((response) => {
            if(response.ok) {
              console.log('Everything went ok: ' + response.status)
              return response.json()
            }else{
              throw new Error('Something went wrong ... \n' + response.status);
            }
          }
          )
        .then((data) => {
            console.log(data);
            setUserAdverts(data)
       })
       .catch((err) => {
          console.log(err.message);
       });
    }
    function getUserAdverts(debug){
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

    function editApartment(advert){
        console.log("Editing apartment" )
        console.log(advert)
        sessionStorage.setItem('advert', JSON.stringify(advert))
        handlePages(Pages.editPage)
    }

    function deleteApartment(index){
        console.log("Deleting apartment with index: " + index)
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
                    <StyledEditButton index={index} onClick={e => {
                        e.preventDefault()
                        editApartment(userAdverts[index])
                        }}>Edytuj</StyledEditButton>
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
            <StyledEditButton onClick={e => {
                        e.preventDefault()
                        fetchAdverts(false)
                        }}>Twoje ogłoszenia</StyledEditButton>
            {getUserAdverts(true)}
        </div>
    )
}