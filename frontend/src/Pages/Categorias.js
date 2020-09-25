import React from 'react';
import { withRouter } from 'react-router-dom';

import './css/Categorias.css';

function Categorias(props){
    const { history } = props;

    return(
        <React.Fragment>
            <div id="contenedor">
                <div id="header">
                    <div id="menu">
                    </div>
                    <div id="title">
                        <h1>Recapito</h1>
                    </div>
                    <div id="perfil">
                        <h3>Alguien</h3>
                    </div>
                </div>
                <div id="buscador"> 
                    <input type="search" className="buscador" placeholder="Busca algun producto" onClick={()=> history.push('/Tienda-comida')} />                 
                </div>
            </div>  
        </React.Fragment>
    )
}

export default withRouter(Categorias);