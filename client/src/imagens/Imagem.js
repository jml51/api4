import {Link,useHistory, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./imagens.css";
import voltar from "./voltar.png";
import profileImg from "../adicionaradmin/Adicionar"
import { Card } from 'react-bootstrap';


const Imagem = () => {
    let {ID_projeto} = useParams();

    const[post, setpost] = useState({});
    const[img, setimg] = useState({});
    const[reso, setreso] = useState({
      resposta:"",
      ID_imagens: ID_projeto
    })

    const history = useHistory();

    const handleChange = (e) => {
      setreso((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.put("/imagens/update", reso);
        console.log("creaçao bem sucedida!!");
        console.log(res);
      } catch (err) {}
    };



    useEffect(()=> {
        axios.get(`http://localhost:5000/api/projeto/id/${ID_projeto}`).then((res) =>{
            setpost(res.data.data);
        });
    }, []);

    useEffect(()=> {
      axios.get(`http://localhost:5000/api/imagens/all`).then((res) =>{
          setimg(res.data.data);
      });
  }, []);


  


    return ( 
        <div className="content">
      <div className="grid-container">
        <div className="grid-child1">
          <h3>Imagem</h3>
        </div>

        
        <div className="grid-child2">
          <div className="vol">
            <Link to="/projetos">
              <img className="voltar" src={voltar} alt="voltar" />
            </Link>
          </div>
          
        </div>
      </div>
      <div>
        <h3>{post.regras}</h3>
      </div>
      <div className="img-holder2">
          <Card.Img variant="top" src={"//localhost:5000/Images/1673620460480imagem.jpg"} />
      </div>
      
      <form>
        <label>Descreva o que vê: </label>
        <br />
        <textarea id="resposta" name="resposta" placeholder="resposta" rows="10" cols="50" onChange={handleChange}></textarea>
      </form>
      <div className="final">
          <Link to="/projetos">
            <button onClick={handleSubmit} >Adicionar</button>
          </Link>
        </div>
      </div>
     );
}
 
export default Imagem;
