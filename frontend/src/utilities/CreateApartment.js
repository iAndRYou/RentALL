import React from 'react'
import {StyledApartmentContainer} from '../components/ApartmentContainer.style';

export function createApartment(apartmentObj) {
  return apartmentObj.map(apartment => {
        return <StyledApartmentContainer price={apartment.price} city={apartment.city} street={apartment.street} picture={apartment.picture} 
        description={apartment.description}  title={apartment.title} latitude={apartment.latitude} longtitude={apartment.longtitude}
        author={apartment.author} date={apartment.date} advertId={apartment.advertId}/>})}
  
export function sortBy(apartmentObj, variable, descending){
  if(variable === 'price'){
    if(descending === true){
      apartmentObj.sort(function(a, b) {
      return parseFloat(b.price) - parseFloat(a.price);})
    }
    else{
      apartmentObj.sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);})
    }
  }
  else if(variable === 'travelTime'){
    apartmentObj.sort(function(a, b) {
      return parseFloat(a.travelTime) - parseFloat(b.travelTime);
  })
  }
  return apartmentObj;
};

