import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

function Ex1() {

  // instance
  const context = useContext(DataContext)
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-primary"></h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h1 className="text-success"> x= { context.x} </h1>
          <h1 className="text-success"> y= { context.y} </h1>
          <h1 className="text-success"> title= { context.title} </h1>
        </div>
      </div>
    </div>

  )
}

export default Ex1
