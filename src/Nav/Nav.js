import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='navegacion'>
      <div className='Logo'> Riki Morty</div>

      <div className='container-items'>
        <ul>
          <li><Link to="/">Character</Link></li>
          <li><Link to="/episode">Episode</Link></li>
          <li><Link to="/location">Location</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav