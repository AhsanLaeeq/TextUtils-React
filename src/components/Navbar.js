import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" style={{color:props.mode==='dark'?'white':'black'}}>
      <a className="navbar-brand" href="#">{props.aq}</a>
      <div className='container'>
      <a className="navbar-brand" href="#">About</a>
      </div>
      <div className="form-check form-switch">
       <input className="form-check-input"  onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
      
         
   
    </div>
  </nav>
     
  )
}

Navbar.propTypes ={aq:PropTypes.string}
