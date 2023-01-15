import React, {useState} from 'react'
import {ApartmentInfo, DefText, BetterText, StyledImage, StyledExpandableDiv, DetailsButton, ScoreGraph, ScoreFill, ScoreText} from './ApartmentContainer.style'

export default function ApartmentContainer({className, price, address, images, title, description, score, travel_time, author, date, advertId}) {
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
        <StyledImage src={images} alt=""></StyledImage> 
        <ApartmentInfo>
            <h2>{title}</h2>
            <DefText>Cena:&nbsp;</DefText>
            <BetterText colour={changeColourDependingOnPrice(price)}>{price}&nbsp;zł / miesiąc</BetterText><br></br>
            <DefText>Lokalizacja:&nbsp;</DefText>
            <BetterText colour='grey'>{address}</BetterText><br></br>
            {/*<DefText>Dojazd do:&nbsp;</DefText><BetterText colour='grey'>AGH</BetterText><br></br>*/}
            {/*<DefText>Środek komunikacji:&nbsp;</DefText><BetterText colour='grey'>Autobus</BetterText><br></br>*/}
            <DefText>Dojazd komunikacją miejską: </DefText>
            <BetterText colour='red'>{travel_time}</BetterText>         
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
   if(num >= 2000){
      return 'red';
   }else if(num >= 1600){
      return 'darkorange';
   }else if(num >= 1300){
      return 'gold';
   }else if(num >= 1000){
      return 'yellowgreen';
   }else{
      return 'seagreen';
   }
}

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