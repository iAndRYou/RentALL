import React from 'react'
import {ApartmentInfo, DefText, BetterText, StyledImage } from './ApartmentContainer.style'

export default function ApartmentContainer({className, price, city, street, picture}) {
  return (
    <div className={className} price={price} city={city} street={street} picture={picture}>
        <StyledImage src={picture} alt="W3Schools.com"></StyledImage> 
        <ApartmentInfo>
            <DefText>Cena:&nbsp;</DefText>
            <BetterText colour={changeColourDependingOnPrice(price)}>{price}&nbsp;zł / miesiąc</BetterText><br></br>
            <DefText>Lokalizacja:&nbsp;</DefText>
            <BetterText colour='grey'>{city}, {street}</BetterText><br></br>
            <DefText>Dojazd do:&nbsp;</DefText><BetterText colour='grey'>AGH</BetterText><br></br>
            <DefText>Środek komunikacji:&nbsp;</DefText><BetterText colour='grey'>Autobus</BetterText><br></br>
            <DefText>Dojazd:&nbsp;</DefText><BetterText colour='red'>&#8734;</BetterText>
        </ApartmentInfo>
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