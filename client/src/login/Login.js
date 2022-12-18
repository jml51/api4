import React, {useState} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

const Login = () => {
  const[inputs, setinputs] = useState({
    email_U: "",
    pass:"",
      
  });

  const [err, seterror] = useState(null)

  const handleChange =  e =>{
    setinputs(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = async e =>{
    e.preventDefault()
    
    Axios.post("/regist/login", inputs).then((response) => {
        if(response.inputs.error){ 
          alert(response.inputs.error);
        }
        else {
          sessionStorage.setItem("accessToken", response.inputs);
        }
    });
  };


    return ( 
        <div className="login">

            <h2>Login</h2>
            <form>
            <label>Email</label>  
              <input 
                required 
                type="text" 
                placeholder="email"
                name="email_U" 
                onChange={handleChange}
               />

              <label>Password</label>  
              <input
                type="password"
                placeholder="Password"
                name="pass"
                onChange={handleChange}
                required
              />

              <button onClick={handleSubmit}>Entrar</button>
            </form>


            <Link className="esqueci" to="/esquece" >Esqueci-me da Password</Link> 
            
            
        </div>
     );
}
 
export default Login;
