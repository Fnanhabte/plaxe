import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import errpage from '../images/plaxe-nature1.jpg'

export default function PagenotFound() {
  return (
    <div className='pageError'>
      <img src={errpage} alt="" />
      <div className="pagenotfound" id='pagenotfound'>
        <div className="page-wrapper">
          <h1>
            Err.
          </h1>
          <p className='first-text'>Page not found</p>
          <p>The page you are looking for does not exist.</p>
          <p>
            <Link to="/plaxe" element={<Home/>}>Let's go back Home</Link>
          </p>
        </div>
        <div className="footer">
         <p> © 2023 Designed & Developed by Fnan. All right reserved.
        </p>
      </div>
      </div>
    </div>
  )
}
