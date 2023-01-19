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
    setUserProfileContext: info =>{prevState =>({
      ...prevState,
      firstName:"",
      lastName:"",
       email:"",
      address:"",
      zipCode:"",
    city:"",
    })}
  }
  const [userProfil, setUserProfile] = useState(UserProfileState)
}

return (<UserProfileContextProvider value={userProfil}>{children}</UserProfileContextProvider>)