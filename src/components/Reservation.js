import React from 'react'
import rooms from "../images/plaxe-rooms.jpg"
import rooms1 from "../images/plaxe-rooms1.jpg"
import rooms2 from "../images/plaxe-rooms2.jpg"
import rooms3 from "../images/plaxe-rooms3.jpg"
import rooms4 from "../images/plaxe-rooms4.jpg"
import rooms5 from "../images/plaxe-rooms5.jpg"
import rooms6 from "../images/plaxe-rooms6.jpg"
import rooms7 from "../images/plaxe-rooms7.jpg"
import rooms8 from "../images/plaxe-rooms8.jpg"
import wineBar from "../images/plaxe-winebar.jpg"
import wineBar2 from "../images/plaxe-winbar2.jpg"
import wineBar3 from "../images/plaxe-winebar3.jpg"
import wineBar4 from "../images/plaxe-winebar4.jpg"
import wineBar5 from "../images/plaxe-winebar5.jpg"
import wineBar6 from "../images/plaxe-winebar6.jpg"
import cafe from "../images/plaxe-cafe.jpg"
import cafe1 from "../images/plaxe-cafe4.jpg"
import cafe2 from "../images/plaxe-cafe9.jpg"
import cafe3 from "../images/plaxe-cafe5.jpeg"
import cafe4 from "../images/plaxe-cafe8.jpg"
import vecation from "../images/plaxe-vaction.mp4"
import plaxeView from "../images/plaxe-outside.jpg"


export default function Reservation() {
  return (
    <div className='reservation'>
      <div className="res-wrapper">
        <img src={plaxeView} alt="Plaxe" />
        <div className="booking-section">

          <ul className='booking-info'>
            <li>
              <div className="selector">
                Location
              </div>
              <small>Ethiopia</small>
            </li>
            <li>
              <div className="selector">
                Rooms
              </div>
              <small>0</small>
            </li>
            <li>
              <div className="selector">
                Adults
              </div>
              <small>0</small>
            </li>
            <li>
              <div className="selector">
                Selected Dates
              </div>
              <small>Jul 3 - Jul 4</small>
            </li>
            <li className='book-li'>
              <div className="book-now">
                <h3>Book Now</h3>
              </div>
            </li>
          </ul>
          <ul className='res-menu'>
            <div className="menu-bar">
              <span className="arrow"></span>
              <span className="arrow"></span>
              <span className="arrow"></span>
            </div>
            <li>
              <p>Summer Destination</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="reservation-section2">
        <div className="section2-wrapper">
          <div className="image-container">
            <div className="left-right">
            <div className="slide-icon"> </div>
            </div>
            <div className="col1">
              <img src={rooms} alt="plaxe" />
              <img src={rooms1} alt="plaxe" />
              <img src={rooms2} alt="plaxe" />
              <img src={rooms3} alt="plaxe" />
              <img src={rooms4} alt="plaxe" />
              <img src={rooms5} alt="plaxe" />
              <img src={rooms6} alt="plaxe" />
              <img src={rooms7} alt="plaxe" />
              <img src={rooms8} alt="plaxe" />
            </div>

          </div>
          <div className="info-container">
            <div className="room-info">
              <p>A warm and authentic Ethiopia experience while enjoying comfort that makes a house a home. See the city from a different angle
                – from the inside.</p>
            </div>
            <div className="view-all">
              <p>
                All Rooms
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="reservation-section3">
        <div className="section2-wrapper">
          <div className="info-container">
            <div className="room-info">
              <p>The Wine Bar is a cozy, intimate room that warmly invites you in for a drink and great conversation. Take your jacket off and stay a while.</p>
            </div>
            <div className="view-all">
              <p>
                Discover
              </p>
            </div>
          </div>
          <div className="image-container">
            <div className="col1">
              <img src={wineBar} alt="plaxe" />
              <img src={wineBar2} alt="plaxe" />
              <img src={wineBar3} alt="plaxe" />
              <img src={wineBar4} alt="plaxe" />
              <img src={wineBar5} alt="plaxe" />
              <img src={wineBar6} alt="plaxe" />
            </div>
            <div className="left-right">
            <div className="slide-icon"> </div>
            </div>
          </div>

        </div>
      </div>
      <div className="reservation-section4">
        <div className="section2-wrapper">
          <div className="image-container">
          <div className="left-right">
            <div className="slide-icon"> </div>
            </div>
            <div className="col1">
              <img src={cafe3} alt="plaxe" />
              <img src={cafe} alt="plaxe" />
              <img src={cafe1} alt="plaxe" />
              <img src={cafe2} alt="plaxe" />
              <img src={cafe4} alt="plaxe" />
            </div>

          </div>

          <div className="info-container">
            <div className="room-info">
              <p className='coffee'>Experience the captivating aroma and flavors of freshly brewed Ethiopian coffee in our cozy, elegant rooms. Each morning, wake up to the invigorating scent of coffee beans, handpicked from Ethiopia's lush highlands. Our skilled baristas will ensure that your cup is crafted to perfection, allowing you to savor the authentic taste of this renowned coffee.</p>
              <p className='mobile-coffe'>
              Experience the captivating aroma and flavors of freshly brewed Ethiopian coffee in our cozy, elegant rooms. Each morning, wake up to the invigorating scent of coffee beans, handpicked from Ethiopia's lush highlands.
              </p>
            </div>
            <div className="view-all">
              <p className='discover-coffee'>
                Discover
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="reservation-section5">
        <div className="section2-wrapper">

          <div className="info-container">
            <div className="room-info">
              <h2>The alchemy of an intimate escape</h2>

            </div>
            <div className="alcemy-text">
              <div className="text-wrapper">
                <p className='text-desktop'>
                  In a world tuned to the fast lane, now is the time to press pause. Feel the magic of reuniting through Plaxe global alchemy. Revel in unrivalled privacy; reconnect in intimate settings; and discover the extraordinary beauty of being together again, discovering cultural traditions and storied ancient customs in the world’s most unique and under-the-radar settings.
                </p>
                <p className='text-mobile'>
                In a world tuned to the fast lane, now is the time to press pause. Feel the magic of reuniting through Plaxe global alchemy.reconnect in intimate settings; and discover the extraordinary beauty of being together again.
                </p>
              </div>
            </div>
            <div className="alcemy-container">
              <div className="col2">
                <video
                  src={vecation}
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                >
                </video>
              </div>


            </div>
            <div className="alcemy-text-footer">
              <div className="text-wrapper">
                <p>
                  Secluded from sight and immersed in nature, Plaxe sanctuaries provide the ultimate group refuge. Lazy moments with little ones under the palms. Lapping up the waves together at sunset. Sounds of laughter around the dinner table. The feelings of joy and closeness are sentiments celebrated in all the exceptional environments Plaxe calls home.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="reservation-section6">
        <div className="section2-wrapper">

          <div className="info-container">

            <div className="alcemy-container">
              <div className="col2">
                <video
                  src={vecation}
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  playsInline
                >
                </video>
              </div>


            </div>
            <div className="alcemy-text-footer">
              <div className="text-wrapper">
                <p>
                  Secluded from sight and immersed in nature, Plaxe sanctuaries provide the ultimate group refuge. Lazy moments with little ones under the palms. Lapping up the waves together at sunset. Sounds of laughter around the dinner table. The feelings of joy and closeness are sentiments celebrated in all the exceptional environments Plaxe calls home.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="reservation-section7">
        <div className="section2-wrapper">

          <div className="info-container">
            <div className="room-info">
              <h2>"Whether travelling to celebrate an anniversary, a landmark birthday or simply to reignite the spirit of the family table, rejoicing in life’s most precious moments is deep-rooted in the Plaxe philosophy."</h2>

            </div>
            <div className="alcemy-text">
              <div className="text-wrapper">

                <p>
                  Plaxe is an unrivalled local community experience for creative, lifestyle, and original hospitality experiences. Join the mailing list for first access to new content, discounts and events.
                </p>

                <div className="join-now">
                  <p>Join the Plaxe</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="reservation-section8">
        <div className="section2-wrapper">

          <div className="info-container">

            <div className="alcemy-text-footer">
              <div className="text-wrapper">
                <p>
                  No request is too great and no detail too small. To begin planning your next stay, contact our multi-lingual reservations team today.
                </p>
                <p className='book'>Book Now</p>
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

    </div>
  )
}
