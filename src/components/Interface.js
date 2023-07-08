import React from 'react'
import video1 from "../images/pexels-anna-nekrashevich-6598884 (2160p).mp4"
import hotel2 from "../images/plaxee.png"
import basement from "../images/plax-basement.jpg"
import livingroom from "../images/plaxe-livingroom.jpg"
import kitchen from "../images/plaxe-kitchen.jpg"
import resturant from "../images/plaxe-restaurants.jpg"
import pool from "../images/plaxe-pool.jpg"
import floors from "../images/plaxe-floors.jpg"
import frontdesk from "../images/plaxe-frontdesk.jpg"
import Menu from './Navigation'
import { useState } from 'react'
import { Link } from "react-router-dom"
import Reservation from './Reservation'

export default function Interface() {
   const [isOpen, setIsOpen] = useState(false)
   const toggleMenu = () => {
      setIsOpen(isOpen => !isOpen);
   }

   return (
      <div className='interface'>
         <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
         <div className="intreface-container">

            <div className="col1 frame1">
               <div className="framer-img">
                  <video
                     src={video1}
                     autoPlay
                     muted
                     loop
                     preload="auto"
                     playsInline
                  >
                  </video>
                  <p className='scroll'>Scroll down</p>
               </div>
               <div className="frame3">
                  <img src={basement} alt="img" />
               </div>
               <div className="frame4">
                  <img src={kitchen} alt="img" />
               </div>
               <div className="frame5">
                  <img src={livingroom} alt="img" />
               </div>
               <div className="frame6">
                  <img src={resturant} alt="img" />
               </div>
               <div className="frame7">
                  <img src={pool} alt="img" />
               </div>
               <div className="frame8">
                  <img src={floors} alt="img" />
               </div>
               <div className="frame9">
                  <img src={frontdesk} alt="img" />
               </div>
               <div className="frame10">
                  <div className="footer-note">
                     <p>Term & Conditions</p>
                     <p>FAQs</p>
                     <p>Contact Us</p>
                     <p>
                        © The Plaxe. All Right Reserved. Privacy Policy.
                     </p>
                  </div>
               </div>

            </div>
            <div className="col1 frame2">
               <div className="framer-img">
                  <img src={hotel2} alt="hotel" />
                  <div className="inner-design">
                     <div className="booking">
                        <div className="menu-box">
                           <div className="menu-wrapper" onClick={toggleMenu}>

                              <span className="arrow"></span>
                              <span className="arrow"></span>
                              <span className="arrow"></span>
                           </div>

                        </div>
                        <div className="booking-wrapper">
                           <h3>
                              <Link to="/reservation" element={<Reservation />}>BOOK NOW</Link>

                           </h3>
                        </div>

                     </div>
                     <div className="brand-logo">
                        <div className="logo"></div>
                     </div>
                     <div className="footer" id='footer'>
                        <p>
                           TIKTOK
                        </p>
                        <p>
                           INSTAGRAM
                        </p>
                        <p>
                           FACEBOOK
                        </p>
                        <p>
                           TWITTER
                        </p>
                        <p>
                           PINTREST
                        </p>
                        <p>
                           YOUTUBE
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}
