import './CSS_PSI.css'
import logout from './logout.ico';
import add from './adiciona.png';

import voltar from "./voltar.png";
import { Link, useHistory, useParams  } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Projetos  ()  {


const [post, setpost] = useState([]);
const [img, setimg] = useState([]);

let history = useHistory();

useEffect(() => {
    axios.get("/imagens/all").then((res) =>{
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
        <div className="grid-child1"><h3>respostas</h3></div>
        <div className="grid-child2">
        <div className="log">
        <div className='addi'>
        
          <Link to="/projetos"><img  className='adicionar' src={voltar} alt="add" /> </Link>
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
                <h3>{value.resposta}</h3>
                <p id="pp" ></p>
                <div className="butoes">
                
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