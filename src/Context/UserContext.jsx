import React, { createContext} from 'react'

// context
export const UserContext = createContext() 


function UserProvider(props) {
  return (
    <UserContext.Provider value={{ name: "test", email: "test@gmail.com"}}>
       {
        props.children
       }
    </UserContext.Provider>
  )
}

export default UserProvider
