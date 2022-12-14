const Esquece = () => {
    return ( 
        <div className="esqueceu">
            <h1>Recuperação da <br/> palavra-passe</h1>
            <label>Introduza o seu email para a recuperação</label>
            <form>
            
              <input
              type="EMAIL"
              placeholder="Email de recuperação"
              required/>

              <button>Inserir</button>
            </form>
        </div>
     );
}
 
export default Esquece
;