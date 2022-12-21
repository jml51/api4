import './CSS_PSI.css'
import logout from './logout.ico';
import { Link, useHistory, useParams  } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Projetos  ()  {


const [post, setpost] = useState([]);

let history = useHistory();

useEffect(() => {
    axios.get("/projeto/all").then((res) =>{
      setpost(res.data.data);
      console.log(res.data.data);
      
    });
}, []);




return (
  <div className="content">
        <div className="grid-container">
        <div className="grid-child1"><h3>Projetos</h3></div>
        <div className="grid-child2">
        <div className="log">
        <Link to="/"><img className="logouts" src={logout} alt="logout" /></Link>
        </div>
        </div>
    </div>
    {post?.length > 0 ? (
      post.map((value, key) => {
        return (
          <ul onClick={() => {history.push(`/Projetos/${value.ID_projeto}`)}}>
            <li className="projetos">
              <div id="up"></div>
              <div id="down">
                <h3 key={value.titulo2}>{value.titulo}</h3>
                <p id="pp" >{value.descriçao}</p>
                <p id="pp" >{value.ID_projeto}</p>
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