import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';

import './css/Detalles.css';

function DatosProducto(props) {
    const { history } = props;
    return (
        <React.Fragment>
            <div className="container-fluid">
                <Header />
                <div className="card text-dark bg-light mb-3 container-fluid">
                    <div className="card-header">CARACTERÍSTICAS</div>
                    <div className="card-body">
                        <div className="row justify-content-end">
                            <p className="col-4"> - 8 partes</p>
                            <button type="button" className="btn btn-danger col-4" onClick={()=> history.push('/PedidoComida')} >
                                HAZ TU PEDIDO
                        </button>
                        </div>
                        <p>- Contiene:</p>
                        <p>* Jamon</p>
                        <p>* Queso</p>
                        <p>* Piña</p>
                        <p>* Tomate</p>
                    </div>
                </div>
                
                    <div className="card text-dark bg-light mb-3 w-75">
                        <div className="card-header">COSTO</div>
                        <div className="card-body">
                            <p className="card-text">$ 19.900</p>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
}
export default withRouter(DatosProducto);