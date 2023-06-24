import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'

const NavBar = ({onSearch, random}) => {
    return (
        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>
      <button className="random" onClick={random}>
ADD RANDOM
      </button>
      <div>
        <Link to= "/about" > 
        <button>  ABOUT  </button>
        </Link>
        <Link to= "/home">
        <button>  HOME  </button>
        </Link>
        <Link to="/favorites">
        <button>  FAVS  </button>
        </Link>
      </div>
        </div>
    )
};

export default NavBar;