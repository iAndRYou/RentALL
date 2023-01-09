// This file contains the global variables used in the application and their getters and setters

var userID = null;
var sessionToken = null;

export function getUserID(){
    return userID;
}

export function setUserID(id){
    userID = id;
}

export function getSessionToken(){
    return sessionToken;
}

export function setSessionToken(token){
    sessionToken = token;
}

