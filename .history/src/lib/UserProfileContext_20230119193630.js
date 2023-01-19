import React, { createContext, useState } from 'react';

const UserProfileContext = createContext({
  firstName:"",
  lastName:"",
  email:"",
  address:"",
  zipCode:"",
  city:"",
  setUserProfileContext: info =>{}
})

const UserProfileContextProvider =({childen}) => {
  const UserProfileState ={
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    zipCode:"",
    city:"",
    setUserProfileContext: info =>{}
  }
  const [userProfil, setUserProfile] = useState(UserProfileState)
}

return (<UserProfileContextProvider v></UserProfileContextProvider>)