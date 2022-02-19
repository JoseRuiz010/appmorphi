import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Card/Cards';

function App() {

  const URL = `https://rickandmortyapi.com/api/character/?page=1`
  const [data, setData] = useState([])

  useEffect(() => {
    (async function () {
      const dataApi = await fetch(URL).then(res => res.json())
      console.log(dataApi);
      setData(dataApi)
    }
    )();
  }, [])


  return (
    <div className="App">
      <Cards />


    </div>
  );
}

export default App;
