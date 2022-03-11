import React, { useEffect, useState } from 'react'
import Cards from '../Card/Cards';
import { Filtro } from '../Filtro/Filtro';
import { Search } from '../Search/Search';

export const Characters = () => {
    const URL = `https://rickandmortyapi.com/api/character/?page=1`
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true);
    const [search, setsearch] = useState('')
    
    useEffect(() => {
        (async function () {
            setloading(true)
            const dataApi = await fetch(URL).then(res => res.json())
            console.log(dataApi.results);
            setData(dataApi.results)
            setloading(false)
        }
        )();
    }, [])

    const changeSearch = (e) => {
        setsearch(e.target.value)
    }

    if (loading) return (<div>Cargando .....</div>)

    return (
        <div className='search'><Search changeSearch={changeSearch} />
            <div className="content">
                <div className='filter'><Filtro /></div>
                <div className='content-cards'><Cards search={search} data={data} /></div>
            </div>
        </div>
    )
}
