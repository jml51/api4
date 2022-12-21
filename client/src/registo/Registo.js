import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';

const Registo = () => {
  const[inputs, setinputs] = useState({
    email_U: "",
    pass:"",
    nome_U:"",  
  });
  
  const [err, seterror] = useState(null)

  const handleChange =  e =>{
    
    setinputs(prev=>({...prev, [e.target.name]: e.target.value}))
    
  }
/*
  function BackButton() {
    const history = useHistory();
  }

  function handleBack() {
    history.goBack();
  }
*/

  const handleSubmit = async e =>{
    e.preventDefault();
    try{
      const res= await Axios.post("/regist/register", inputs)
        console.log('Register Sucessefull!!');
        console.log(res);
    }catch(err){
      
    }
  }

    return ( 
        <div className="create">

            <h2>Registo</h2>
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
            <label>Nome</label>  
              <input
                type="text"
                placeholder="Nome"
                name="nome_U"
                onChange={handleChange}
                required
              />  
              
              <button onClick={handleSubmit} >Registar</button>
              
            </form>
        </div>
     );
};
 
export default Registo;
