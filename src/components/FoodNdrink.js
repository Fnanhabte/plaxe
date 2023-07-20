import React from 'react'
import wineBar from "../images/plaxe-winebar.jpeg"
import wineBar2 from "../images/plaxe-wine2.jpg"
import wineBar3 from "../images/plaxe-wine3.jpg"
import wineBar4 from "../images/plaxe-winebar4.jpg"
import cafe4 from "../images/plaxe-cafe1.jpg"
import cafe2 from "../images/plaxe-cafe2.jpg"
import cafe3 from "../images/plae-cafe3.jpg"
import cafe1 from "../images/plaxe-cafe4.jpg"
import dining1 from "../images/plaxe-dining.jpg"
import dining2 from "../images/plaxe-dining2.avif"
import dining3 from "../images/plaxe-dining3.avif"
import dining4 from "../images/plaxe-family.jpeg"
import lobby1 from "../images/plaxe-lobby7.jpg"
import lobby2 from "../images/plaxe-lobby3.jpg"
import lobby3 from "../images/plaxe-lobby1.jpg"
import lobby4 from "../images/plaxe-lobby8.jpg"
import { useState } from 'react'
import Navigation from './Navigation'


export default function FoodNdrink() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <div className='foodNdrink'>
      <Navigation isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="reservation-section2">
        <div className="section2-wrapper">
          <div className="image-container">
            <div className="left-right">
              <div className="slide-icon"> </div>
            </div>

            <div className="mobile-menu">
              <div className="menu-wrapper" onClick={toggleMenu}>
                <span className="arrow"></span>
                <span className="arrow"></span>
                <span className="arrow"></span>
              </div>
              <li>
                <p>Menu</p>
              </li>
            </div>

            <h1>The Plaxe Wine Bar</h1>
            <div className="col1">

              <img src={wineBar} alt="plaxe" />
              <img src={wineBar2} alt="plaxe" />
              <img src={wineBar3} alt="plaxe" />
              <img src={wineBar4} alt="plaxe" />
            </div>
            <div className="info-container">
              <div className="room-info">

                <p>The Wine Bar is an intimate space with curated art, music and a wine list you won’t find anywhere else in the city. Designed as an ode to great parisian bars and cozy settings. Our Wine List is curated with natural and biodynamic wines that are as beautiful and unique as we are. If a cocktail is more your speed, we have everything from the classics to new age.</p>
              </div>
              <div className="view-all">
                <p>
                  View sample menu
                </p>

              </div>
            </div>
            <h1>Plaxe Cafe</h1>
            <div className="col1">

              <img src={cafe1} alt="plaxe" />
              <img src={cafe2} alt="plaxe" />
              <img src={cafe3} alt="plaxe" />
              <img src={cafe4} alt="plaxe" />
            </div>
            <div className="info-container">
              <div className="room-info">

                <p> The Plaxe Cafe, where we curate a delightful variety of hot and cold beverages and food offerings from the finest providers in the city. At present, we are thrilled to serve you coffee crafted by the award-winning producer, The Angry Roaster, and scrumptious sandwiches prepared by the local legends, Black Camel. However, we understand the busy nature of life, so feel free to grab your coffee to go if needed.</p>
              </div>
              <div className="view-all">

                <p>
                  8 - 1pm Mon - Sun
                </p>

              </div>
            </div>

            <h1>Dining at Plaxe</h1>
            <div className="col1">

              <img src={dining1} alt="plaxe" />
              <img src={dining2} alt="plaxe" />
              <img src={dining3} alt="plaxe" />
              <img src={dining4} alt="plaxe" />
            </div>
            <div className="info-container">
              <div className="room-info">

                <p>Welcoming you with open arms! At The Plaxe, we understand that dining is more than just a meal; it's an art form. We take pride in our commitment to quality, where each dish reflects our passion for culinary excellence and the joy of sharing our creations with you. Prepare to be delighted as you partake in an extraordinary culinary adventure that will leave you yearning to return for more. Bon appétit!</p>
              </div>
              <div className="view-all">

                <p>
                  View sample menu
                </p>
                <p>
                  Make a reservation
                </p>
                <p>

                  5 - 11pm Mon - Sun
                </p>



              </div>
            </div>

            <h1>Plaxe Lobby</h1>
            <div className="col1">

              <img src={lobby1} alt="plaxe" />
              <img src={lobby2} alt="plaxe" />
              <img src={lobby3} alt="plaxe" />
              <img src={lobby4} alt="plaxe" />
            </div>
            <div className="info-container">
              <div className="room-info">

                <p>The heartbeat of The Plaxe. The type of place where your morning coffee turns into your 5 o'clock martini. We fill the space with the talent to keep you inspired while you crush your most pressing projects and shoot the shit about life.
                </p>

              </div>
              <div className="view-all">
                <p>
                  chillax with us!
                </p>

              </div>
            </div>

            <div className="alcemy-text-footer">
              <div className="text-wrapper">
                <p>
                  Reservations? Menu questions? Need the recipe for that drink from last night? Text us.
                </p>
                <p className='book'>Send us a Message</p>
              </div>
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
      </div>
      <div className="foodNdrink-wrapper">
        <div className="menu-box">
          <div className="menu-wrapper" onClick={toggleMenu}>
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
  )
}
