import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div className="login">

            <h2>Login</h2>
            <form>
              <label>Email</label>  
              <input
              type="EMAIL"
              required/>

    	    <label>Password</label>  
              <input
              type="password"
              required minLength={"8"}/>

              <button>Entrar</button>
            </form>


            <Link className="esqueci" to="/esquece" >Esqueci-me da Password</Link> 
            
            
        </div>
     );
}
 
export default Login;
