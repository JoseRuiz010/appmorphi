import React, { useEffect, useState } from 'react'
import Cards from '../../Card/Cards'
import './StylesEpisodes.css'
export const Episode = () => {
  const [search, setsearch] = useState('');
  const [chraracter, setchraracter] = useState([])
  const [loading, setloading] = useState(true)
  const [Episodios, setEpisodios] = useState([])

  const [id, setid] = useState(1)
  const URL = `https://rickandmortyapi.com/api/episode/${id}`
  useEffect(() => {

    (async function () {
      setloading(true)
      const data = await fetch(URL).then(data => data.json())
      console.log(data);
      setEpisodios(data)


      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setchraracter(a)
      console.log(a);
      setloading(false)


    })()

  }, [URL])

  if (loading) return (<h1>Cargando ...</h1>)

  return (
    <div className='contentEpisode'>

      <div className="title">
        <h1>Episode name: {Episodios.name}</h1>
        <h3>Air date:{Episodios.air_date}</h3>
      </div>
      <div className="episodies">

        <h4>Pick Episodie</h4>
        <select name="Choose" id="Episodio" onChange={(e) => setid(e.target.value)}>
          <option> Choose....</option>
          {
            [...Array(51).keys()].map((x, index) => {
              return <option key={x + index} value={x + 1}>{`Episodio - ${x + 1}`}</option>
            })
          }


        </select>

        <div className='content-cards'>
          <Cards search={search} data={chraracter} />
        </div>
      </div>
    </div>
  )
}
