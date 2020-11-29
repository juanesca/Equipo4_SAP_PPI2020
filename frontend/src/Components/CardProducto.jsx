import React from 'react';
import { withRouter } from 'react-router-dom';

import '../Pages/css/TiendaComida.css';

function imagenes(props) {
    const { history } = props;
    const {src, path} = props.imagen;

    return (
        <div>
            <div className="col mb-4">
                <div className="card h-100 ">
                    <img height="100px" width="15px" src={src} className="card-img-top img-fluid" alt="..." display="inline" background-color="red" />
                    <div className="card-body" />
                    <h5 className="card-title">Producto</h5>
                    <a href="" className="btn btn-dark text-white" onClick={()=> history.push(path)} >Comprar</a>
                </div>
            </div>
        </div>
    )
}

export default withRouter(imagenes);