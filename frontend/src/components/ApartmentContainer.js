import React, {useState} from 'react'
import {ApartmentInfo, DefText, BetterText, StyledImage, StyledExpandableDiv, DetailsButton, ScoreGraph, ScoreFill, ScoreText, ContactInfo} from './ApartmentContainer.style'

export default function ApartmentContainer({className, price, address, images, title, description, score, travel_time, fullname, phone_number, email, advertId}) {
   const [isOpen, setIsOpen] = useState(false)
   const [buttonText, setButtonText] = useState("Pokaż szczegóły")
   const toggle = () => {
      setButtonText(isOpen ? "Pokaż szczegóły" : "Ukryj szczegóły");
      setIsOpen(!isOpen);
    };


   function travelTime(travel_time, debug){
      if(travel_time !== null || debug){
         return(
            <div>
               <DefText>Średni dojazd komunikacją miejską: </DefText>
               <BetterText colour='grey'>{travel_time}</BetterText>
            </div>
         )
      }
   }
   return (
    <div className={className}>
        <StyledImage src={images} alt=""></StyledImage> 
        <ApartmentInfo>
            <h2>{title}</h2>
            <DefText>Cena:&nbsp;</DefText>
            <BetterText colour='grey'>{price}&nbsp;zł / miesiąc</BetterText><br></br>
            <DefText>Lokalizacja:&nbsp;</DefText>
            <BetterText colour='grey'>{address}</BetterText><br></br>
            {/*<DefText>Dojazd do:&nbsp;</DefText><BetterText colour='grey'>AGH</BetterText><br></br>*/}
            {/*<DefText>Środek komunikacji:&nbsp;</DefText><BetterText colour='grey'>Autobus</BetterText><br></br>*/}
            {travelTime(travel_time, false/*debug*/)}    
        </ApartmentInfo>
        <ScoreGraph colour={scoreColor(score)} degree={scoreString(score)}>
            <ScoreFill>
               <ScoreText colour={scoreColor(score)}>{score}</ScoreText>
            </ScoreFill>
        </ScoreGraph>
        <div>
            <DetailsButton onClick={toggle}>{buttonText}</DetailsButton>
        </div>
        <StyledExpandableDiv isOpen={isOpen}>
            <DefText>Opis:&nbsp;</DefText>
            <br></br>
            <DefText>&nbsp;{description}</DefText>
            <br></br>
            <br></br>
            <ContactInfo>
               <DefText>Dane kontaktowe:</DefText><br></br>
               <DefText>Imię i nazwisko:&nbsp;</DefText>
               <BetterText colour='#52ACDF'>{fullname}</BetterText><br></br>
               <DefText>Telefon:&nbsp;</DefText>
               <BetterText colour='#52ACDF'>{phone_number}</BetterText><br></br>
               <DefText>Email:&nbsp;</DefText>
               <BetterText colour='#52ACDF'>{email}</BetterText><br></br>
            </ContactInfo>
        </StyledExpandableDiv>
    </div>
  )
}
//"https://www.w3schools.com/images/w3schools_green.jpg"
//'#00cc00'

export function scoreColor(score){
   var num = Number(score);
   if(num >= 90){
      return 'seagreen';
   }else if(num >= 70){
      return 'yellowgreen';
   }else if(num >= 50){
      return 'gold';
   }else if(num >= 30){
      return 'darkorange';
   } else{
      return 'red';
   }
}

export function scoreString(score){
   var num = Number(score);
   num = num * 3.6;
   var text = num.toString();
   return text + "deg";
}