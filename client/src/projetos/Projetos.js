import './CSS_PSI.css'
import logout from './logout.ico';
import add from './adiciona.png';
import delete1 from './delete.png'
import atualizar from './atualizar.webp'
import livro from './livro.png'
import { Link, useHistory, useParams  } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Projetos  ()  {


const [post, setpost] = useState([]);
const [img, setimg] = useState([]);

let history = useHistory();

useEffect(() => {
    axios.get("/projeto/all").then((res) =>{
      setpost(res.data.data);
      console.log(res.data.data); 
    });
}, []);




const onDelete =  (id) => {

    axios.delete(`http://localhost:5000/api/projeto/delete/${id}`).then(() => {
      alert("deleted")
    });
    
};


return (
  <div className="content">
        <div className="grid-container">
        <div className="grid-child1"><h3>Projetos</h3></div>
        <div className="grid-child2">
        <div className="log">
        <div className='addi'>
        <div className='respostas'>
        <Link to="/respostas"><img  className='respostas' src={livro} alt="resp" /> </Link>
        </div>
          <Link to="/adicionar"><img  className='adicionar' src={add} alt="add" /> </Link>
        </div>
          <Link to="/"><img className="logouts" src={logout} alt="logout" /></Link>
        </div>
        </div>
    </div>
    {post?.length > 0 ? (
      post.map((value, key) => {
        
        return (
          <ul >
            <li className="projetos">
              <div id="up" >
              </div>
              <div id="down">
                <h3>{value.titulo}</h3>
                <p id="pp" >{value.descriçao}</p>
                <div className="butoes">
                  <div className="butao">
                    <img className="atual" alt="atualizar " src={atualizar} onClick={() => {history.push(`/atualizar/${value.ID_projeto}`)}} />
                  </div>

                  <div className="butao">
                   <button onClick={() => {history.push(`/projetos/${value.ID_projeto}`)}}>Entrar</button>
                  </div>
                  
                  <div className="butao">
                  <img className="del" alt="delete " src={delete1} onClick ={()=>{onDelete(value.ID_projeto)}}  />
                </div>
              </div>
              </div>
            </li>
          </ul>
        );
      })
    ) : (
      <div className="title">Data Loading.. </div>
    )}
  </div>
);
}
 
export default Projetos;