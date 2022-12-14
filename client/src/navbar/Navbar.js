import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Maic</h1>
            <div className="links">
            <Link to="/registo">Registo</Link>
            <Link to="/">Login</Link>
            <Link to="/projetos">Projeto</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;