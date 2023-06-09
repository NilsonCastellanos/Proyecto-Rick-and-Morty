import { useState } from "react";

import style from ".././LoginForm/LoginForm.module.css";

function validate (user){
    let errors={}
    if (!user.email){
        errors.email = "Enter you email";
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)){
        errors.email = "Invalid email"
    }
    if (user.email.legth >=35){
        errors.email = "Invalid email";
    }
    if(!/\d/.test (user.password)){
    errors.password = "Pasword must contain a letter";
}
    if(user.password.legth <6 || user.password.length >10){
    errors.password = "Pasword must be between 6 and 10 characters"
}
    return errors
}
function LoginForm ({login}){

const[user,setUser] = useState({
    email: "",
    password: "",
});

const [errors,setErrors] = useState ({
    email: "",
    password: "",
})

function handlerChange (e){
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    })

    setErrors(validate({
        ...user,
        [e.target.name]: e.target.value,
    }))
}

function handlerSubmit (e){
    e.preventDefault(user)
    if (!errors.email && !errors.password){
    login (user);
} else{
    alert ("Incorrect Data");
}
}
    return (

        <div className ={style.formContainer}>
            <div className={style.formTitle}>
            <h1>Fill You Credentials </h1>
            </div>

            <form onSubmit={handlerSubmit}>
                <div className={style.credentials}>
                    <label> Username</label>
                    <input 
                    type="text" 
                    placeholder="abcdfg@email.com" 
                    name="email"
                    value={user.email}
                    onChange={handlerChange}
                    />
                      {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={style.credentials}>
                    <label> Password</label>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={user.password}
                    onChange={handlerChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type= "submit" className={style.submitBtn}>
                    LOGIN
                </button>
            </form>
        </div>
    )
    
}

export default LoginForm;