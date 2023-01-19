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
    setUserProfileContext: info => setUserProfile(prevState =>({
      ...prevState,
      firstName:info.firstName,
      lastName:info.lastName,,
      email:info.email,
      address:info.firstName,
      zipCode:info.firstName,
      city:info.firstName,
    )})
  }
  const [userProfil, setUserProfile] = useState(UserProfileState)
}

return (<UserProfileContextProvider value={userProfil}>{children}</UserProfileContextProvider>)