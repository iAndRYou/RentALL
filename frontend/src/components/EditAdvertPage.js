import {StyledInput, StyledAddButton, StyledFormBreak, StyledTextArea} from './EditAdvertPage.style'
import React, { useRef } from 'react'
import {Pages} from '../utilities/HandlePages.js'
export default function EditAdvertPage({className, handlePages}){
    const titleInputRef = useRef('')
    const cityInputRef = useRef('')
    const streetInputRef = useRef('')
    const buildingNumberInputRef = useRef('')
    const flatNumberInputRef = useRef('')
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
        const title = titleInputRef.current.value
        const city = cityInputRef.current.value
        const street = streetInputRef.current.value
        const buildingNumber = buildingNumberInputRef.current.value
        const flatNumber = flatNumberInputRef.current.value
        const price = priceInputRef.current.value
        const details = detailsInputRef.current.value
        const imageLink = imageLinkRef.current.value

        if(title === '' || city === '' || street === '' || buildingNumber === '' || flatNumber === '' || price === '' || imageLink === ''){
            setEditStatus('Wypełnij wszystkie pola!')
            return
        }

        const adress = city + ' ' + street + ' ' + buildingNumber + ' ' + flatNumber
        const updatedAdvert = {
            title: title,
            adress: adress,
            price: price,
            details: details,
            images: imageLink
        }

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
                    <StyledInput type="text" name="title" value={obj.title} ref={titleInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Miasto:
                    <StyledInput type="text" name="city" value={obj.city} ref={cityInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Ulica:
                    <StyledInput type="text" name="street" value={obj.street} ref={streetInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Nr domu:
                    <StyledInput type="text" name="building" ref={buildingNumberInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Mieszkanie:
                    <StyledInput type="text" name="flat" ref={flatNumberInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Cena:
                    <StyledInput type="number" min='0' name="price" value={obj.price} ref={priceInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Opis:
                    <StyledTextArea type="text" name="password" value={obj.description} ref={detailsInputRef}/>
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