import React from 'react';
import './css/Tiendat.css';
import Header from '../Components/Header';
import Card from '../Components/CardTienda'
import { data } from '../utils/mock/dataTiendasTechno';

function Tiendat() {
  return (
    <main>
      <Header />
      <div class="card-align">
        <Card data={data} />
      </div>
    </main>
  );
}

export default Tiendat;
