import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Card/Cards';
import { Filtro } from './Filtro/Filtro';
import Nav from './Nav/Nav';
import { Search } from './Search/Search';

function App() {

  const URL = `https://rickandmortyapi.com/api/character/?page=1`
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)
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

  if (loading) return (<div>Cargando .....</div>)


  return (
    <div className="App">
      <div className="navbar">
        <Nav/>
      </div>
     <div className='search'><Search/></div>
      <div className="content">
         {/* <div className='filter'><Filtro/></div> */}
         <div className='content-cards'><Cards data={data}/></div>  
      </div>    
    </div>
  );
}

export default App;
