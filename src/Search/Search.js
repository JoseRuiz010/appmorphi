import React from 'react'
import './search.css'
export const Search = ({changeSearch}) => {

  return (
    <div className='searchContent'>
      <input onChange={(e)=>changeSearch(e)}/>
       <button className='btn'>Buscar</button>
    </div>
  )
}
