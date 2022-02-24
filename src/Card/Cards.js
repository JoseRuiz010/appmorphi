import React from 'react'
import Card from './Card'

const Cards = ({data,search}) => {
    console.log(data);

     
    
    return (
        <div className='containerCard'>
            {  

                data.filter(personaje=>personaje.name.toUpperCase().includes(search.toUpperCase().trim())).map((personaje)=>
                    <Card personaje={personaje}></Card>

                )
            }
            
        </div>
    )
}

export default Cards