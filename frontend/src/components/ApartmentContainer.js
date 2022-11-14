import React from 'react'
import { AppContainer, ApartmentInfo, DefText, BetterText } from './ApartmentContainer.style'

export default function ApartmentContainer({className, price, city, street, picture}) {
  return (
    <div className={className} price={price} city={city} street={street} picture={picture}>
        <ApartmentInfo>
            <DefText>cena: </DefText>
            <BetterText colour='lightgreen'>{price}</BetterText><br></br>
            <DefText>Lokalizacja: </DefText>
            <BetterText colour='grey'>{city}, {street}</BetterText>
        </ApartmentInfo>
    </div>
  )
}
