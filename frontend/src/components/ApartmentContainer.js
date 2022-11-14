import React from 'react'
import {ApartmentInfo, DefText, BetterText } from './ApartmentContainer.style'

export default function ApartmentContainer({className, price, city, street, picture}) {
  return (
    <div className={className} price={price} city={city} street={street} picture={picture}>
        <ApartmentInfo>
            <DefText>Cena:&nbsp;</DefText>
            <BetterText colour='#00cc00'>{price}&nbsp;zł / miesiąc</BetterText><br></br>
            <DefText>Lokalizacja:&nbsp;</DefText>
            <BetterText colour='grey'>{city}, {street}</BetterText>
        </ApartmentInfo>
    </div>
  )
}
