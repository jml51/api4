import { Link, useHistory, useParams } from "react-router-dom";
import voltar from "./voltar.png";
import axios from "axios";
import React, { useState } from "react";
import "./Adiciona.css";

const Adicionar =  () => {

  let {ID_projeto} = useParams();

  const [inputs, setinputs] = useState({
    titulo: "",
    descriçao: "",
    regras: "",
    ID_projeto: ID_projeto
  });
  const [file, setfile] = useState (null);




  const handleChange = (e) => {
    setinputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  



  const onInputChange = (e) => {
    console.log(e.target.files)
    setfile(e.target.files[0])
  }
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/projeto/update", inputs);
      console.log("creaçao bem sucedida!!");
      history.push("/projetos");
      console.log(res);
    } catch (err) {}
  };



  return (
    <div className="page">
    <div className="page">
      <div className="grid-container">
        <div className="grid-child1">
          <h3>Adicionar</h3>
        </div>
        <div className="grid-child2">
          <div className="vol">
            <Link to="/projetos">
              <img className="voltar" src={voltar} alt="voltar" />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Nome do projeto</h1>
        <input type="text" id="titulo" placeholder="titulo" name="titulo" className="custom-textbox" onChange={handleChange} />

        <h3 className="heading">Adicione a imagem</h3>
        <div className="img-holder"></div>
        <form method="post" action="#" id="#" >
                 
              <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" multiple="" onChange={onInputChange}/>
              </div>
              
            
          </form>
      </div>

      <div className="regras">
        <form>
          <label>Insira a/as regras do projeto: </label>
          <br />
          <textarea id="regras" name="regras" placeholder="regras" rows="10" cols="50" onChange={handleChange}></textarea>
        </form>
      </div>

      <div className="descricao">
        <form>
          <label>Insira a descricao do projeto: </label>
          <br />
          <textarea
            id="descricao"
            rows="10"
            cols="50"
            placeholder="descriçao"
            name= "descriçao"
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
      <div>

      </div>

      <div className="final">
        <Link to="/projetos">
          <button onClick={handleSubmit} >Adicionar</button>
        </Link>
      </div>
    </div>
  </div>  
  );
}

export default Adicionar;
