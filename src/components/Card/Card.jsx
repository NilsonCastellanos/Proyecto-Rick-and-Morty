//import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import  './Card.module.css'



const Card = ({  id, name, status, species, gender, origin, image, onClose }) => {




   return (
      <div className='cards'>
         <Link to={`/detail/${id}`}>
            <div className='face front'>
               <img src={image} alt="" />
            </div>
            <div className='face back'>
               <p>Name: "{name}"</p>
               <p>Status: "{status}"</p>
               <p>Species: "{species}"</p>
               <p>Gender: "{gender}"</p>
               <p>Origin: "{origin}"</p>
               <button onClick={() => { onClose(id) }}>Close</button>
            </div>
         </Link>
      </div>


   );
};

export default Card;