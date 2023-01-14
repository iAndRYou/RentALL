import {StyledInput, StyledAddButton, StyledFormBreak, StyledTextArea, StyledImage} from './EditAdvertPage.style'
import React, { useRef, useState } from 'react'
import {Pages} from '../utilities/HandlePages.js'
export default function EditAdvertPage({className, handlePages}){
    const titleInputRef = useRef('')
    const cityInputRef = useRef('')
    const streetInputRef = useRef('')
    const priceInputRef = useRef('')
    const detailsInputRef = useRef('')
    const imageLinkRef = useRef('')
    const [editStatus, setEditStatus] = React.useState('')

    console.log("Parsing advert from session storage...")
    var obj = {}
    try {
        obj = JSON.parse(sessionStorage.getItem('advert'))
    } catch (ex) {
        console.error(ex);
    }
    console.log(obj)

    function handleEditAdvertForm(){
        var title = titleInputRef.current.value
        var city = cityInputRef.current.value
        var street = streetInputRef.current.value
        var price = priceInputRef.current.value
        var details = detailsInputRef.current.value
        var imageLink = imageLinkRef.current.value

        title === '' ? title = obj.title : title = title
        city === '' ? city = obj.city : city = city
        street === '' ? street = obj.street : street = street
        price === '' ? price = obj.price : price = price
        details === '' ? details = obj.description : details = details
        imageLink === '' ? imageLink = obj.images : imageLink = imageLink

        var adress = city + ', ' + street
        const updatedAdvert = {
            title: title,
            adress: adress,
            price: price,
            details: details,
            images: imageLink
        }

        console.log(updatedAdvert)

        var link = "http://127.0.0.1:8000/adverts"
        //fetch TODO

        handlePages(Pages.profilePage)
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
                    Miasto:
                    <StyledInput type="text" name="city" placeholder={obj.city} ref={cityInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Adres:
                    <StyledInput type="text" name="adress" placeholder={obj.street} ref={streetInputRef}/>
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