import React from 'react'
import { withRouter } from 'react-router-dom';

function CardTienda(props) {
    const { history } = props;

    return (
        <div className="container-fluid">
            {props.data.map((item, index) => {
                return (
                    <div class="card border-dark mb-3" type="button" key={`item-${index}`} onClick={()=> history.push(item.path)}>
                        <div class="card-header">{item.nombre}</div>
                        <figure>
                        <img height="200px" src={item.url} class="card-img-top" alt="..." />
                        </figure>                    
                    </div>
                );
            })}

        </div>
    )
}

export default withRouter(CardTienda);