import LoginForm from "../../components/LoginForm/LoginForm";
import style from "../../views/LandingPage/LandingPage.module.css"


function LandingPage({login}){
    return( <div className={style.landingContainer}>
        <LoginForm login={login} />
    </div>
        
    ); 
}

export default LandingPage;