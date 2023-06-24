import './App.css';
//import style from './App.module.css'
import { useState, useEffect } from 'react'; // useState es para crear estados locales 
import { useDispatch } from "react-redux";
import { removeFavorite } from "./redux/actions";
import { Route, Routes, useLocation, useNavigate, } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards.jsx';
import logoRM from './components/asets/pi.jfif';
import Detail from './views/Detail/Detail';
import About from './views/About/About';

import Favorites from './views/favorites/Favorites';
import ErrorPage from './views/Error/ErrorPage';
import LandingPage from './views/LandingPage/LandingPage';

function App() {

   const [characters, setCharacters] = useState([]);// recibe un estado inicial --'setcharacter' es la funcion seteadora del estado
   const [access, setAccess] = useState(false);

   const location = useLocation()
   const navigate = useNavigate();
   const dispatch = useDispatch();


   const EMAIL = 'nil@gmail.com';
   const PASSWORD = '123nil';

   //------------------------------------------------------------

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate("/");
   }, [access]);


   function searchHandler(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con esta ID!');
            }
         })
         .catch((error) => console.log("Error en la matrix"));
   }
   function closeHandler(id) {
      let deleted = characters.filter((character) => character.id !== Number(id));

      dispatch(removeFavorite(id));

      setCharacters(deleted);
   }
   function randomHandler() {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();
      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
            .then((response) => response.json())
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert("No hay personajes con ese ID.");
               }
            });
      } else {
         console.log("Ya agregaste todos los personajes");
         return false;
      }

   }

   return (
      <div className="App">

         <img className='title' src={logoRM} alt="logo" />

         {location.pathname !== "/" && <NavBar onSearch={searchHandler} random={randomHandler} />}



         <Routes>

            <Route path="/" element={<LandingPage login={login} />} />
            <Route path="/home"
               element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path="*" element={<ErrorPage />} />


         </Routes>


      </div>
   );
}

export default App;
