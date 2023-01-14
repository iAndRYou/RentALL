import {StyledInput, StyledAddButton, StyledFormBreak, StyledTextArea} from './AddAdvertPage.style'
import React, { useRef } from 'react'
import {Pages} from '../utilities/HandlePages.js'
export default function AddAdvertPage({className, handlePages}){
    const titleInputRef = useRef('')
    const cityInputRef = useRef('')
    const streetInputRef = useRef('')
    const priceInputRef = useRef('')
    const detailsInputRef = useRef('')
    const imageLinkRef = useRef('')
    const [addStatus, setAddStatus] = React.useState('')

    function handleAddAdvertForm(){
        var title = titleInputRef.current.value
        var city = cityInputRef.current.value
        var street = streetInputRef.current.value
        var price = priceInputRef.current.value
        var details = detailsInputRef.current.value
        var imageLink = imageLinkRef.current.value

        if(title === '' || city === '' || street === '' || price === '' || imageLink === ''){
            setAddStatus('Wypełnij wszystkie pola!')
            return
        }

        var adress = city + ', ' + street
        const newAdvert = {
            title: title,
            adress: adress,
            price: price,
            details: details,
            images: imageLink
        }

        console.log(newAdvert)

        var link = "http://127.0.0.1:8000/adverts"
        //fetch TODO

        handlePages(Pages.renderApartments)
    }

    return(
        <div className={className}>
            <h2>Dodaj ogłoszenie</h2>
            <h2>Podaj informacje:</h2>
            <form>
                <label>
                    Tytuł ogłoszenia:
                    <StyledInput type="text" name="title" ref={titleInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Miasto:
                    <StyledInput type="text" name="city" ref={cityInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Adres:
                    <StyledInput type="text" name="adress" ref={streetInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Cena/miesiąc:
                    <StyledInput type="number" min='0' name="price" ref={priceInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Link zdjęcia:
                    <StyledInput type="text" name="link" ref={imageLinkRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Opis:
                    <StyledTextArea type="text" name="password" ref={detailsInputRef}/>
                </label>
            </form>
            <br></br>
            <StyledFormBreak></StyledFormBreak>
            <StyledAddButton type="submit" 
                    onClick={e => {
                        e.preventDefault()
                        handleAddAdvertForm()
                        }}>Dodaj
            </StyledAddButton>
            {addStatus}
        </div>
    )
}