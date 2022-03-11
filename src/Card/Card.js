import React from 'react'
import './card.css'
const Card = ({ personaje }) => {



    return (
        <div className='card'>
            <div className='img-1'>
                <img className='im' src={personaje.image} alt='img' />
            </div>
            <div className='datosPersonaje'>
                <b className='p-2'><span>{personaje.name}</span></b>
                <label className='p-2'>Location <span>{personaje.location.name}</span></label>
            </div>
            <div className={`status  ${personaje.status == 'Alive' ? 'bgGreen' : personaje.status == 'Dead' ? 'bgRed' : 'bgGray'}`}>{personaje.status}</div>

        </div>
    )
}



export default Card