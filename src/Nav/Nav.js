import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <div className='navegacion'>
        <div className='Logo'> Riki Morty</div>

        <div className='container-items'>
            <ul>
                <li>Character</li>
                <li>Episode</li>
                <li>Location</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav