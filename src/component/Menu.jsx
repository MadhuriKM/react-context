import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">React Context</NavLink>

            <button className="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <div className="offcanvas offcanvas-end" tabIndex={'-1'} id='menu'>
        <div className="offcanvas-header">
            <h5 className="text-success offcanvas-title">React Hooks</h5>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
            <div className="list-group">
            <NavLink to={`/`} className="list-group-item">Home</NavLink>
            <NavLink to={`/ex1`} className="list-group-item">Ex1</NavLink>
            <NavLink to={`/ex2`} className="list-group-item">Ex2</NavLink>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Menu
