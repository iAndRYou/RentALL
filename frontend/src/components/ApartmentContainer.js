import React, {useState} from 'react'
import {ApartmentInfo, DefText, BetterText, StyledImage, StyledExpandableDiv, DetailsButton, AdvertButton } from './ApartmentContainer.style'

export default function ApartmentContainer({className, price, city, street, images, title, description, latitude, longtitude, author, date, advertId}) {
   const [isOpen, setIsOpen] = useState(false)
   const [buttonText, setButtonText] = useState("Pokaż szczegóły")
   const toggle = () => {
      setButtonText(isOpen ? "Pokaż szczegóły" : "Ukryj szczegóły");
      setIsOpen(!isOpen);
    };

   const getActualAdvert = () => { 
      return null;
   }

   return (
    <div className={className}>
        <StyledImage src={images} alt="W3Schools.com"></StyledImage> 
        <ApartmentInfo>
            <DefText>Cena:&nbsp;</DefText>
            <BetterText colour={changeColourDependingOnPrice(price)}>{price}&nbsp;zł / miesiąc</BetterText><br></br>
            <DefText>Lokalizacja:&nbsp;</DefText>
            <BetterText colour='grey'>Kraków{/*city*/}, Skrzyneckiego 21/37h{/*street*/}</BetterText><br></br>
            <DefText>Dojazd do:&nbsp;</DefText><BetterText colour='grey'>AGH</BetterText><br></br>
            <DefText>Środek komunikacji:&nbsp;</DefText><BetterText colour='grey'>Autobus</BetterText><br></br>
            <DefText>Dojazd: </DefText><BetterText colour='red'>30 min</BetterText>
        </ApartmentInfo>
        <ApartmentInfo>
            
            
            
        </ApartmentInfo>
        <div>
            <DetailsButton onClick={toggle}>{buttonText}</DetailsButton>
            <AdvertButton onClick={getActualAdvert}>Zobacz ofertę →</AdvertButton>
        </div>
        <StyledExpandableDiv isOpen={isOpen}>
            <DefText>Opis:&nbsp;</DefText>
            <br></br>
            <DefText>{description}</DefText>
            <br></br>
        </StyledExpandableDiv>
    </div>
  )
}
//"https://www.w3schools.com/images/w3schools_green.jpg"
//'#00cc00'
export function changeColourDependingOnPrice(price){
   var num = Number(price);
   if(num >= 5000){
      return 'red';
   }else if(num >= 2500){
      return '#F28C28';
   }else if(num >= 2000){
      return '#FFBF00';
   }else{
      return 'green';
   }
}