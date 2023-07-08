import React from 'react'

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
               <h1>Our Rooms</h1>
               <h1>Eat and Drink</h1>
               <h1>The Neighbourhood</h1>
               <h1>Events</h1>
               <h1>Camera Rolls</h1>
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
