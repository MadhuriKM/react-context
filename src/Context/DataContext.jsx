import React, { createContext } from 'react'

//create context instance
export const DataContext = createContext() 

// data provider
function DataProvider(props) {
  return (
    <DataContext.Provider value={{ x:30, y: 22, title: "Welcome to context"}}>
       { props.children }
    </DataContext.Provider>
  )
}

export default DataProvider
