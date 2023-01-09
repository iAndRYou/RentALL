import {StyledInput, StyledAddButton, StyledFormBreak, StyledTextArea} from './AddAdvertPage.style'
import React, { useRef } from 'react'
export default function AddAdvertPage({className}){
    const titleInputRef = useRef('')
    const cityInputRef = useRef('')
    const streetInputRef = useRef('')
    const buildingNumberInputRef = useRef('')
    const flatNumberInputRef = useRef('')
    const priceInputRef = useRef('')
    const detailsInputRef = useRef('')
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
                    <StyledInput type="text" name="street" ref={streetInputRef}/>
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
                    <StyledInput type="number" min='0' name="price" ref={priceInputRef}/>
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

                        }}>Dodaj
            </StyledAddButton>
        </div>
    )
}