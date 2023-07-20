import React from 'react'
import {Link} from "react-router-dom"
import Rooms from "./Rooms"
import FoodNdrink from './FoodNdrink'
import Reservation from "./Reservation"
import Home from "./Home"
import Activity from './Activity'
import Cameraroll from './Cameraroll'

export default function
   Navigation({ isOpen, toggleMenu }) {

   return (
      <div className={isOpen ? "show" : 'menu-dropdown'}>

         <div className="menu-wrapper">
            <div className="menu-header">
               <div className='cancel-menu' onClick={toggleMenu}>

                  <span className='exit left'></span>
                  <span className='exit right'></span>
               </div>
               <div className="plaxe-logo">

               </div>
            </div>
            <div className="menu-nav">
            <Link to="/plaxe" element={<Home />}><span>Home</span></Link>
            <Link to="/reservation" element={<Reservation />}> <span>Book Now</span></Link>
            <Link to="/rooms" element={<Rooms />}><span>Our Rooms</span></Link>
            <Link to="/eat-and-drink" element={<FoodNdrink />}> <span>Eat and Drink</span></Link>
            <Link to="/plaxe-events" element={<Activity />}> <span>Events</span></Link>
            <Link to="/camera-roll" element={<Cameraroll />}> <span>Camera Rolls</span></Link>
            </div>
            <div className="menu-footer">
               <ul className='INFO'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Gift Card</li>
                  <li>Forthcoming Devleopment</li>
                  <li>Careers</li>
                  <li>Privacy Policy</li>
                  <li>Legal Notice</li>
                  <li>Digital Accessibility</li>
                  <li>The Plaxe Shop</li>
               </ul>
               <ul className='policy'>
                  <li>
                     © The Plaxe 2023. All Right Reserved.
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}
