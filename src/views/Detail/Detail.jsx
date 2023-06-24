import {useParams} from "react-router-dom";
import {useEffect} from "react";
import { useState } from "react";
import axios from 'axios';
import{Link} from 'react-router-dom';
import '../../views/Detail/Detail.module.css';


function Detail () {
    const{id} = useParams();
    const [character,setCharacter] =useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return ( 
    <div className="="detail-container>
    <div className="img-container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.image} />
    </div>

    <div className="details">
     
      <div>
         <h3>Species: </h3>
         <p>{character.species}</p>
      </div>
      <div>
         <h3>Gender: </h3>
         <p>{character.gender}</p>
      </div>
      <div>
         <h3>Status: </h3>
         <p>{character.status}</p>
      </div>
      <div>
         <h3>Origin: </h3>
         <p>{character.origin?.name}</p>
      </div>
      <div>
         <h3>Location: </h3>
         <p>{character.location?.name}</p>
      </div>
    </div>
    <Link to ='/home'>
      <button>Home</button>
    </Link>
    </div>
        
    );
}
export default Detail;