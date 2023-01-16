import {StyledInput, StyledAddButton, StyledFormBreak, StyledTextArea, StyledImage} from './EditAdvertPage.style'
import React, { useRef, useState } from 'react'
import {Pages} from '../utilities/HandlePages.js'

/**
 * Component for editing advert details
 * @returns - the edit advert page
 */
export default function EditAdvertPage({className, handlePages}){
    const titleInputRef = useRef('')
    const addressInputRef = useRef('')
    const priceInputRef = useRef('')
    const detailsInputRef = useRef('')
    const imageLinkRef = useRef('')
    const [editStatus, setEditStatus] = React.useState('')

    // get the current advert details from the session storage
    console.log("Parsing advert from session storage...")
    var obj = {}
    try {
        obj = JSON.parse(sessionStorage.getItem('advert'))
    } catch (ex) {
        console.error(ex);
    }
    console.log(obj)

    /**
     * Function that handles the edit advert form and sends the data to the backend
     */
    function handleEditAdvertForm(){
        //get the data from the form and add it to the newAdvert object
        var title = titleInputRef.current.value
        var address = addressInputRef.current.value
        var price = priceInputRef.current.value
        var details = detailsInputRef.current.value
        var imageLink = imageLinkRef.current.value

        title === '' ? title = obj.title : title = title
        address === '' ? address = obj.address : address = address
        price === '' ? price = obj.price : price = price
        details === '' ? details = obj.description : details = details
        imageLink === '' ? imageLink = obj.images[0] : imageLink = imageLink

        const updatedAdvert = {
            title: title,
            address: address,
            price: parseFloat(price),
            description: details,
            images: [imageLink]
        }

        console.log(updatedAdvert)
        //send the newAdvert object to the backend
        updateAdvert(updatedAdvert)

    }
    /**
     * Function that sends the updated advert to the backend to be added to the database and then redirects to the profile page
     * @param {*} newAdvert - the new advert object
     */
    function updateAdvert(newAdvert){
        var link = "http://127.0.0.1:8000/adverts/" + obj.advert_id
        fetch (link, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With, append,delete,entries,foreach,get,has,keys,set,values",
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token_type") + " " + sessionStorage.getItem('token')
        },
            body: JSON.stringify(newAdvert)
        }).then((response) => {
            if(response.ok) {
              console.log('Everything went ok: ' + response.status)
              return response.json()
            }else{
              throw new Error('Something went wrong with adding the advert... \n' + response.status);
            }
          }
          )
        .then((data) => {
            console.log(data);
            setEditStatus('Edytowanie powiodło się!')
            handlePages(Pages.profilePage)
       })
       .catch((err) => {
            console.log(err.message);
            setEditStatus('Edycja mieszkania nie powiodło się!')
       });
    }

    return(
        <div className={className}>
            <h2>Edytuj ogłoszenie</h2>
            <h2>Podaj informacje:</h2>
            <form>
                <label>
                    Tytuł ogłoszenia:
                    <StyledInput type="text" name="title" placeholder={obj.title} ref={titleInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Adres:
                    <StyledInput type="text" name="address" placeholder={obj.address} ref={addressInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Cena/miesiąc:
                    <StyledInput type="number" min='0' name="price" placeholder={obj.price} ref={priceInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Link zdjęcia:
                    <StyledInput type="text" name="link" placeholder={obj.images} ref={imageLinkRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Obecne zdjęcie:
                    <StyledFormBreak></StyledFormBreak>
                    <StyledImage src={obj.images}></StyledImage>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Opis:
                    <StyledTextArea type="text" name="password" placeholder={obj.description} ref={detailsInputRef}/>
                </label>
            </form>
            <br></br>
            <StyledFormBreak></StyledFormBreak>
            <StyledAddButton type="submit" 
                    onClick={e => {
                        e.preventDefault()
                        handleEditAdvertForm()
                        }}>Edytuj
            </StyledAddButton>
            {editStatus}
        </div>
    )
}