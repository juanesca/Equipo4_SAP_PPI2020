import React from 'react';
import { withRouter } from 'react-router-dom';

import '../Pages/css/TiendaComida.css';

function imagenes(props) {
    const { history } = props;

    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-md-2">
            <div className="col mb-4">
                <div className="card h-100 ">
                    <img height="100px" width="15px" src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg" className="card-img-top img-fluid" alt="..." display="inline" background-color="red" />
                    <div className="card-body" />
                    <h5 className="card-title">Producto</h5>
                    <a href="" className="btn btn-dark text-white" onClick={()=> history.push('/Datos-pizza')} >Comprar</a>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card h-100 ">
                    <img height="100px" width="15px" src="https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg" className="card-img-top img-fluid" alt="..." display="inline" background-color="red" />
                    <div className="card-body" />
                    <h5 className="card-title">Producto</h5>
                    <a href="" text-align="center" className="btn btn-dark text-white center">Comprar</a>
                </div>
            </div>
            <div className="col mb-4 center">
                <div className="card h-100 center">
                    <img height="100px" width="15px" src="https://www.cucinare.tv/wp-content/uploads/2020/01/Malteadas1.jpg" className="card-img-top img-fluid" alt="..." display="inline" img-align="center" background-color="red" />
                    <div className="card-body" />
                    <h5 className="card-title">Producto</h5>
                    <a href="" className="btn btn-dark text-white">Comprar</a>

                </div>
            </div>
        </div>
    )
}

export default withRouter(imagenes);