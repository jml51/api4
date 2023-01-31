import Navbar from "./navbar/Navbar";
import './App.css'
import Registo from "./registo/Registo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Atualizar from "./atualizar/Atualizar"
import Esquece from "./login/Esquece";
import Projetos from "./projetos/Projetos";
import Imagem from "./imagens/Imagem";
import Adicionar from "./adicionaradmin/Adicionar";
import Respostas from "./respostas/Respostas";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
        
          <Switch>

            <Route exact path="/">
            <Navbar />
              <Login />
            </Route>
            
            <Route exact path="/registo">
            <Navbar />
              <Registo />
            </Route>

            <Route exact path="/Esquece">
              <Esquece />
            </Route>

            <Route exact path="/projetos">
              <Projetos />
            </Route>

            <Route exact path="/projetos/:ID_projeto">
              <Imagem />
            </Route>
            
            <Route exact path="/atualizar/:ID_projeto">
              <Atualizar />
            </Route>
            
            <Route exact path="/Adicionar">
             <Adicionar/>
            </Route>

            <Route exact path="/Respostas">
             <Respostas/>
            </Route>


          </Switch>


        </Router>
      </div>
    </div>

  );
}

export default App;
