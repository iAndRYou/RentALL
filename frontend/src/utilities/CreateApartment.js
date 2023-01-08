import React from 'react'
import {StyledApartmentContainer, NoResultsPage} from '../components/ApartmentContainer.style';

export function createApartment(apartmentObj, renderBool) {
  if(renderBool === true){
      if(apartmentObj !== null){
        return apartmentObj.map(apartment => {
              return <StyledApartmentContainer price={apartment.price} city={apartment.city} street={apartment.street} images={apartment.images} 
              description={apartment.description}  title={apartment.title} latitude={apartment.latitude} longtitude={apartment.longtitude}
              author={apartment.author} date={apartment.date} advertId={apartment.advertId}/>})
      }else{
        return <NoResultsPage>No results found ;(</NoResultsPage>
      }
  }
}
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

export function sortApartments(value, apartmentObj){
    var shallowCopyOfApartmentObj = [...apartmentObj];
    if(value == 0){
      shallowCopyOfApartmentObj = sortBy(shallowCopyOfApartmentObj, 'price', false)
    }else if(value == 1){
      shallowCopyOfApartmentObj = sortBy(shallowCopyOfApartmentObj, 'price', true)
    }
    return shallowCopyOfApartmentObj
}