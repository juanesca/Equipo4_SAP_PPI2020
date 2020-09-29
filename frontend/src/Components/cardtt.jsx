'use strict';
import React from 'react';
import './cardtt.css';
function imagenes() {
    return (

        <div class="row row-cols-1 row-cols-md-3 row-cols-md-2 ">
            <div class="col mb-4">
                <div class="card h-100 ">
                    <img height="100px"width="15px" src="https://falabella.scene7.com/is/image/FalabellaCO/4168095_1?q=i?wid=800&hei=800&qlt=70" class="card-img-top" alt="..." display="inline"background-color = "red" />
                    <div class="card-body" />
                    <h5 class="card-title">Producto</h5>
                    <a href="" class="btn btn-dark text-white">Comprar</a>
                </div>
            </div>


            <div class="col mb-4">
                <div class="card h-100 ">
                    <img height="100px" width="15px" src="https://www.steren.com.co/media/catalog/product/cache/b69086f136192bea7a4d681a8eaf533d/image/204066505/audifonos-bluetooth-xtreme-con-reproductor-mp3.jpg" class="card-img-top" alt="..." display="inline" background-color = "red"/>
                    <div class="card-body" />
                    <h5 class="card-title">Producto</h5>
                    <a href="" text-align="center" class="btn btn-dark text-white center">Comprar</a>
                </div>
            </div>

            <div class="col mb-4 center">
                <div class="card h-100 center">
                    <img height="100px" width="15px" src="https://s3.amazonaws.com/storage.wobiz.com/135/135030/images/Large/1581604563_a028c476f23af87322460e2b5bccc3c3.135030.jpeg" class="card-img-top" alt="..." display="inline" img-align="center"background-color = "red" />
                    <div class="card-body" />
                    <h5 class="card-title">Producto</h5>
                    <a href="" class="btn btn-dark text-white">Comprar</a>

                </div>
            </div>
        </div>

















    )
}

export default imagenes;
