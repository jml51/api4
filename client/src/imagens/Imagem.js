import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Imagem = () => {
    let {ID_projeto} = useParams();

    const[post, setpost] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/projeto/id/${ID_projeto}`).then((res) =>{
            setpost(res.data.data);
        });
    });

    return ( 
        <div className='content'>
            <h3>{post.titulo}</h3>
        </div>
     );
}
 
export default Imagem;
