import './CSS_PSI.css'
import logout from './logout.ico';
import { Link } from 'react-router-dom';

const Projetos = () => {
    return ( 
    <div className="content">
         

         <div class="grid-container">

<div className="grid-child1"><h3>Projetos</h3></div>

<div className="grid-child2">
  <div className="log">
    <Link to="/"><img className="logouts" src={logout} alt="logout" /></Link>
  </div>
</div>

</div>
    <div>
      <ul>
        <li class="projetos">
          <div id="up"></div>
          <div id="down">
            <h3>projeto 1</h3>
            <p id="pp">selecione a Area correspondente ao que lhe é pedido</p>
            <Link to="/Projetos/imagem"><button>start</button></Link>
          </div>
        </li>


        <li class="projetos">
          <div id="up"></div>
          <div id="down">
            <h3>projeto 1</h3>
            <p id="pp">selecione a Area correspondente ao que lhe é pedido</p>
            <button>start</button>
          </div>
        </li>


        <li class="projetos">
          <div id="up"></div>
          <div id="down">
            <h3>projeto 1</h3>
            <p id="pp">selecione a Area correspondente ao que lhe é pedido</p>
            <button>start</button>
          </div>
        </li>



       


         <li class="projetos">
          <div id="up"></div>
          <div id="down">
            <h3>projeto 1</h3>
            <p id="pp">selecione a Area correspondente ao que lhe é pedido</p>
            <button>start</button>
          </div>
        </li>


        <li class="projetos">
          <div id="up"></div>
          <div id="down">
            <h3>projeto 1</h3>
            <p id="pp">selecione a Area correspondente ao que lhe é pedido</p>
            <button>start</button>
          </div>
        </li>


        <li class="projetos">
          <div id="up"></div>
          <div id="down">
            <h3>projeto 1</h3>
            <p id="pp">selecione a Area correspondente ao que lhe é pedido</p>  
            <button >start</button>
          </div>
        </li>

      </ul>
    </div>


        </div>
     );
}
 
export default Projetos;