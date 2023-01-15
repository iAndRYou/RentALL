import {StyledInput, StyledAddButton, StyledFormBreak, StyledTextArea} from './AddAdvertPage.style'
import React, { useRef } from 'react'
import {Pages} from '../utilities/HandlePages.js'
export default function AddAdvertPage({className, handlePages}){
    const titleInputRef = useRef('')
    const cityInputRef = useRef('')
    const streetInputRef = useRef('')
    const buildingNumberInputRef = useRef('')
    const flatNumberInputRef = useRef('')
    const priceInputRef = useRef('')
    const detailsInputRef = useRef('')
    const imageLinkRef = useRef('')
    const [addStatus, setAddStatus] = React.useState('')

    function handleAddAdvertForm(){
        var title = titleInputRef.current.value
        var city = cityInputRef.current.value
        var street = streetInputRef.current.value
        var buildingNumber = buildingNumberInputRef.current.value
        var flatNumber = flatNumberInputRef.current.value
        var price = priceInputRef.current.value
        var details = detailsInputRef.current.value
        var imageLink = imageLinkRef.current.value

        if(title === '' || city === '' || street === '' || buildingNumber === '' ||  price === '' || imageLink === ''){
            setAddStatus('Wypełnij wszystkie pola!')
            return
        }
        if(flatNumber !== ''){
            flatNumber = '/'+flatNumber
        }
        var address = city + ', ' + street + ' ' + buildingNumber +  flatNumber
        const newAdvert = {
            title: title,
            address: address,
            price: parseFloat(price),
            description: details,
            images: [imageLink],
        }

        console.log(newAdvert)
        addAdvert(newAdvert)

    }

    function addAdvert(newAdvert){
        var link = "http://127.0.0.1:8000/adverts"
        fetch (link, {
            method: 'POST',
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
            setAddStatus('Dodanie powiodło się!')
       })
       .catch((err) => {
            console.log(err.message);
            setAddStatus('Dodanie mieszkania nie powiodło się!')
       });
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
                    Ulica:
                    <StyledInput type="text" name="address" ref={streetInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Nr domu:
                    <StyledInput type="text" name="address" ref={buildingNumberInputRef}/>
                </label>
                <StyledFormBreak></StyledFormBreak>
                <label>
                    Mieszkanie:
                    <StyledInput type="text" name="address" ref={flatNumberInputRef}/>
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