import style from './SearchBar.module.css'
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [id,setId] =useState(''); // estado =id- setId = funcion seteadora del estado 
   const handleChange = (event) =>{// funcion manejadora de un evento 
   
setId(event.target.value)

};
    return (
        <div className={style.contenedor}>
            <input type='search' onChange={handleChange}value={id}/>
            <button onClick ={()=> {onSearch(id)}}>Agregar</button>
        </div>
    );
};

export default SearchBar;


//comentarios
// input dispara el evento, el id, es el estado local, la funcion on 