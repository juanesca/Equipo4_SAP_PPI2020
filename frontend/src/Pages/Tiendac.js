import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/Tiendac.css';
import Header from '../Components/Header2';
import Cards from '../Components/CardTienda';
import { data } from '../utils/mock/dataTiendasComida';

function Tiendac() {
  return (
    <main>
      <Header />
      <div class="card-align">
        <Cards data={data}/>
      </div>
    </main>
  );
}

export default withRouter(Tiendac);
