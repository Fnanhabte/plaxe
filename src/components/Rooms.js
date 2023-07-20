import React from 'react'
import rooms1 from "../images/plaxe-LargeRooms.jpg"
import rooms2 from "../images/plaxe-rooms1.jpg"
import rooms3 from "../images/plaxe-rooms8.jpg"
import rooms4 from "../images/plaxe-rooms5.jpg"
import rooms5 from "../images/plaxe-rooms7.jpg"
import morning from "../images/plaxe-palm.mp4"
import middle2 from "../images/plaxe-art6.jpg"
import Navigation from './Navigation'
import { useState } from 'react'
import Reservation from './Reservation'
import {Link } from 'react-router-dom'
import Large from './Large'

export default function Rooms() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }
  return (
    <div className='all-rooms'>
      <Navigation isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="rooms-wrapper">
        <div className="booking-section">
          <ul className='menu-bars'>
            <div className="button-wrapper" onClick={toggleMenu}>
              <div className="menu-box">
                <div className="menu-wrapper">
                  <span className="arrow"></span>
                  <span className="arrow"></span>
                  <span className="arrow"></span>
                </div>
                <li>
                  <p>Menu</p>
                </li>
              </div>
            </div>
          </ul>
          <ul className='booking-info'>
            <li>
              <div className="selector">
              <Link to="/rooms" element={<Rooms />}>
              Extra Large
              </Link>
              </div>

            </li>
            <li>
              <div className="selector">
              <Link to="/large" element={<Large />}>
              Large
              </Link>

              </div>

            </li>
            <li>
              <div className="selector">
              <Link to="/small" element={<Large />}>
              Small
              </Link>
              </div>

            </li>
            <li>
              <div className="selector">
              <Link to="/medium" element={<Large />}>
              Medium
              </Link>

              </div>

            </li>
            <li className='book-li'>
              <div className="book-now">
                <h3>
                  <Link to="/reservation" element={<Reservation />}>BOOK NOW</Link>
                </h3>
              </div>
            </li>
          </ul>

        </div>
      </div>
      <div className="main-container">
        <div className="img-wrapper">
          <img src={rooms1} alt="plaxe-rooms" />
          <div className="button-wrapper" onClick={toggleMenu}>
            <div className="menu-box">
              <div className="menu-wrapper">
                <span className="arrow"></span>
                <span className="arrow"></span>
                <span className="arrow"></span>
              </div>
              <li>
                <p>Menu</p>
              </li>
            </div>
          </div>
        </div>
        <div className="text-wrapper">
          <div className="large-text">
            <div className="extra-logo"></div>
          </div>
          <div className="small-text">
            <p className='desktop-text'>
              2 Queen Beds for twice the fun. Local art, books and records? Check. Check. Double rooms have the same great features as our other rooms but with extra space to spare. So go ahead, invite a few friends and take the city by storm.
            </p>
            <p className='mobile-text'>
              2 Queen Beds for twice the fun. Double rooms have the same great features as our other rooms but with extra space to spare. So go ahead, invite a few friends and take the city by storm.
            </p>
          </div>

        </div>
      </div>

      <div className="rooms-info-container">
        <div className="rooms-info">
          <ul>
            <li>
              <p>
                Up to 4 guests
              </p>
            </li>
            <li className='sqft'>
              <p>
                330sqft
              </p>
            </li>
            <li>
              <p>
                2 beds
              </p>
            </li>
            <li>
              <p>
                EXL
              </p>
            </li>
          </ul>
        </div>
        <div className="amenities">
          <p>Common Amenities</p>
          <ul>
            <li>
              <p>
                Flat screen TV & Satellite Channels
              </p>
            </li>
            <li className='sqft'>
              <p>
                Telephone with international direct dialing
              </p>
            </li>
            <li>
              <p>
                Private bathroom with bathtub, shower and toilets
              </p>
            </li>
            <li>
              <p>
                Large dressing & Hair Dryer
              </p>
            </li>
            <li>
              <p>
                Complimentary Nespresso machine
              </p>
            </li>
            <li>
              <p>
                WIFI access
              </p>
            </li>
            <li>
              <p>
                Individual safe
              </p>
            </li>
          </ul>
          <ul className='footer-text'>
            <li>
              <p>
                Connecting rooms in selected guest rooms may be available. Please indicate this in your online reservation, or ask one of our reservation agents.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="room-image-container">
        <div className="col1 image">
          <div className="room1">
            <img src={rooms2} alt="plaxe-rooms" />
          </div>
        </div>
        <div className="col1 image-side">
          <div className="room2">
            <img src={rooms3} alt="plaxe-rooms" />
          </div>
          <div className="room-text">
            <p>View all</p>
          </div>
          <div className="room3">
            <img src={rooms4} alt="plaxe-rooms" />
          </div>
        </div>
      </div>
      <div className="room-image-container2">
        <div className="col1 image">
          <div className="room1">
            <img src={rooms5} alt="plaxe-rooms" />
          </div>
        </div>
        <div className="col1 image-side">
          <div className="room2">
            <img src={rooms3} alt="plaxe-rooms" />
          </div>
        </div>
        <div className="room3">
          <img src={rooms4} alt="plaxe-rooms" />
        </div>
      </div>
      <div className="room-container-text">
        <div className="text-wrapper">
          <p>Our rooms come with everything you need and nothing you don’t.</p>
          <small className='link'>See what matters</small>
        </div>
        <dic className="middle-text">
          <h1>
            Don’t waste your “you up?” text on someone who won’t respond. Text us. We’re always up and we have wine.
          </h1>
        </dic>
      </div>
      <div className="room-image-container3">
        <div className="col1 image-side">
          <div className="room2">
            <img src={middle2} alt="plaxe-rooms" />
          </div>
        </div>

      </div>
      <div className="room-image-container4">
        <div className="col1 image-side">
          <div className="room2">
            <h2>You’ve got questions and we’ve got answers.</h2>

            <div className="message-button">
              <div className="message">
                <p>send us message</p>
              </div>
            </div>

            <div className="support-footer">
              <p>
                <p>Text us 24/7 with your best knock knock joke or if you need anything for your stay. Our host team is your Plaxe BFF, and we won’t leave you on read.</p>
              </p>
            </div>

          </div>
        </div>

        <div className="col1 image">
          <div className="room1">
            <video
              src={morning}
              autoPlay
              muted
              loop
              preload="auto"
              playsInline
            >
            </video>
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

      </div>
    </div>
  )
}
