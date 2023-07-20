import React from 'react'
import Rooms from './Rooms'
import Reservation from './Reservation'
import { Link } from 'react-router-dom'
import Small from './Small'
import Home from './Home'


export default function Cameraroll() {
  return (
    <div className='largebed-section'>
      <div className='bg-img'></div>
      <h1>
        Page is Coming soon.
      </h1>
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
            <Link to="/large" element={<Small />}>
              Large
            </Link>

          </div>

        </li>
        <li>
          <div className="selector">
            <Link to="/small" element={<Small />}>
              Small
            </Link>
          </div>

        </li>
        <li>
          <div className="selector">
            <Link to="/medium" element={<Small />}>
              Medium
            </Link>
          </div>
        </li>
        <li>
          <div className="selector">
            <Link to="/plaxe" element={<Home />}>
              Home
            </Link>

          </div>

        </li>
        <li className='book-li'>
          <div className="selector">
            <Link to="/reservation" element={<Reservation />}>Book now</Link>
          </div>
        </li>
      </ul>
      <ul className='policy'>
        <li>
          © The Plaxe 2023. All Right Reserved.
        </li>
      </ul>

    </div>
  )
}
