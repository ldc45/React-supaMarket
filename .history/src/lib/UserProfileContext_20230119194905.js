import React, { createContext, useState } from 'react';

export const UserProfileContext = createContext({
  firstName:"",
  lastName:"",
  email:"",
  address:"",
  zipCode:"",
  city:"",
  setUserProfileContext: info =>{}
})

const UserProfileContextProvider =({children}) => {
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
      lastName:info.lastName,
      email:info.email,
      address:info.address,
      zipCode:info.zipCode,
      city:info.city
  }))
  }
  const [userProfil, setUserProfile] = useState(UserProfileState)
return (<UserProfileContext.Provider value={userProfil}>{children}</UserProfileContext.Provider>)
}

export default UserProfileContextProvider;