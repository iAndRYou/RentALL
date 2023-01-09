// This file contains the global variables used in the application and their getters and setters

var userID = null;
var sessionToken = null;

export default function getUserID(){
    return userID;
}

export default function setUserID(id){
    userID = id;
}

export default function getSessionToken(){
    return sessionToken;
}

export default function setSessionToken(token){
    sessionToken = token;
}
