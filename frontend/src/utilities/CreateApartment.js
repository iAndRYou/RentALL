import React from 'react'
import {StyledApartmentContainer, NoResultsPage} from '../components/ApartmentContainer.style';

export function createApartment(apartmentObj, renderBool) {
  if(renderBool === true){
      if(apartmentObj !== null){
        return apartmentObj.map(apartment => {
              return <StyledApartmentContainer price={apartment.price} address={apartment.address} images={apartment.images[0]} 
              description={apartment.description}  title={apartment.title} score={Math.round(apartment.score)} latitude={apartment.latitude} longtitude={apartment.longtitude}
              author={apartment.author} date={apartment.date} advertId={apartment.advertId} travel_time={apartment.travel_time}/>})
      }else{
        return <NoResultsPage>No results found ;(</NoResultsPage>
      }
  }
}
export function sortBy(apartmentObj, variable, descending){
  console.log("sortby", variable, descending)
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
  else if(variable === 'score'){
    apartmentObj.sort(function(a, b) {
      return parseFloat(b.score) - parseFloat(a.score);
  })
  }
  return apartmentObj;
};

export function sortApartments(value, apartmentObj){
    var shallowCopyOfApartmentObj = [...apartmentObj];
    if(value === '0'){
      shallowCopyOfApartmentObj = sortBy(shallowCopyOfApartmentObj, 'price', false)
    }else if(value === '1'){
      shallowCopyOfApartmentObj = sortBy(shallowCopyOfApartmentObj, 'price', true)
    }else if(value === '2'){
      shallowCopyOfApartmentObj = sortBy(shallowCopyOfApartmentObj, 'travelTime', false)
    }else if(value === '3'){
      shallowCopyOfApartmentObj = sortBy(shallowCopyOfApartmentObj, 'score', false)
    }
    return shallowCopyOfApartmentObj
}