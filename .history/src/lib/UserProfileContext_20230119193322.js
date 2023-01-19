import React, { createContext } from 'react';

const UserProfileContext = createContext({
  firstName:"",
  lastName:"",
  email:"",
  address:"",
  zipCode:"",
  city:"",
  setUserProfileContext: info =>{}
})

const UserProfileContextProvider =({childen})