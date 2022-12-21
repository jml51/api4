import Navbar from "./navbar/Navbar";
import './App.css'
import Registo from "./registo/Registo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Esquece from "./login/Esquece";
import Projetos from "./projetos/Projetos";
import Imagem from "./imagens/Imagem";


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

            <Route exact path="/Projetos/:ID_projeto">
              <Imagem />
            </Route>


          </Switch>


        </Router>
      </div>
    </div>

  );
}

export default App;
