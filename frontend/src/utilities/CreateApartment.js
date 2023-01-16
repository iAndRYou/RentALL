import React from 'react'
import {StyledApartmentContainer, NoResultsPage} from '../components/ApartmentContainer.style';

/**
 * This function creates the apartment components and renders them on the page
 * For each apartment object in the apartmentObj array, it creates a new apartment component
 * @param {*} apartmentObj  - array of apartment objects gotten from the backend
 * @param {*} renderBool - boolean value that determines whether the apartment components should be rendered or not
 * @returns - apartment components
 */
export function createApartment(apartmentObj, renderBool) {
  if(renderBool === true){
      if(apartmentObj !== null){
        return apartmentObj.map(apartment => {
              return <StyledApartmentContainer price={apartment.price} address={apartment.address} images={apartment.images[0]} 
              description={apartment.description}  title={apartment.title} score={Math.round(apartment.score)} latitude={apartment.latitude} longtitude={apartment.longtitude}
              author={apartment.author} date={apartment.date} advertId={apartment.advertId} travel_time={apartment.travel_time} fullname={apartment.fullname} email={apartment.email} phone_number={apartment.phone_number}/>})
      }else{
        return <NoResultsPage>No results found ;(</NoResultsPage>
      }
  }
}

/**
 * Function that sorts the apartment objects by price, travel time or score in ascending or descending order
 * It cumulates all the sorting functions in one function
 * @param {*} apartmentObj - array of apartment objects gotten from the backend
 * @param {*} variable - variable to sort by
 * @param {*} descending - boolean value that determines whether the sorting should be ascending or descending
 * @returns - sorted array of apartment objects
 */
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
      return parseFloat(a.travel_time) - parseFloat(b.travel_time);
  })
  }
  else if(variable === 'score'){
    apartmentObj.sort(function(a, b) {
      return parseFloat(b.score) - parseFloat(a.score);
  })
  }
  return apartmentObj;
};

/**
 * Fuunction that manages sorting it makes copies of the apartment object array and sorts it based on the value from html select
 * It calls the sortBy function to sort the apartment objects
 * Shallow copy is used to avoid mutating the original apartment object array and also to notifiy the react components that the apartment object array has changed
 * in order to re-render the apartment components
 * @param {*} value - value from html select
 * @param {*} apartmentObj - array of apartment objects gotten from the backend
 * @returns - sorted array of apartment objects
 */
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