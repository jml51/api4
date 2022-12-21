import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';

const Login = () => {
  const[inputs, setinputs] = useState({
    email_U: "",
    pass:"",
      
  });

  const [err, seterror] = useState(null)

  const history = useHistory();

  const handleChange =  e =>{
    setinputs(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubmit = () =>{
    
    
    Axios.post("/regist/login", inputs).then((response) => {
      if(response.input.error){
        alert(response.input.error);
      } else{
          sessionStorage.setItem("accessToken", response.inputs);
          history.push("/projetos");  
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
