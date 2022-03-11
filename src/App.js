import Nav from "./Nav/Nav";
import { Characters } from "./screen/Characters";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Location } from "./screen/Location";
import { Personaje } from "./screen/personaje/Personaje";
import { Episode } from "./screen/episodes/Episode";


function App() {


  return (
    <div className="App">



      <div className="navbar">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Personaje />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location" element={<Location />} />
      </Routes>




    </div>
  );
}

export default App;
