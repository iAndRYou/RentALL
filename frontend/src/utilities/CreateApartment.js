import React from 'react'
import {StyledApartmentContainer} from '../components/ApartmentContainer.style';

export function createApartment(apartmentObj) {
  return apartmentObj.map(apartment => {
        return <StyledApartmentContainer price={apartment.price} city={apartment.city} street={apartment.street} picture={apartment.picture} />})}
  

