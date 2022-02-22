import React from 'react'
import Card from './Card'

const Cards = ({data}) => {
    console.log(data);
    return (
        <div className='containerCard'>
            {
                data.map((personaje)=>
                    <Card personaje={personaje}></Card>

                )
            }
            
        </div>
    )
}

export default Cards