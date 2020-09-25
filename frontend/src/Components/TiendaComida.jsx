import React from 'react';

import '../Pages/css/TiendaComida.css';

function tiendacomidas() {
    return (
        <div class="container">
            <form class="form col-12 col-md-6">
                <div class="form-group ">
                    <label align="center" for="exampleDropdownFormEmail2">Telefono</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="Telefono" >
                    </input>
                </div>
                <div class="form-group">
                    <label for="exampleDropdownFormEmail2">Direccion</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="Direccion">
                    </input>
                </div>
            </form>
        </div>
    )
}

export default tiendacomidas;