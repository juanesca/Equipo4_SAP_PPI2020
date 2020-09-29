import React from 'react';
import Carritocomidas from '../components/carritocomidas';
import Header from '../components/header';
import Primercuad  from '../components/primercuad';
import Segundocuad from '../components/segundocuad';
import '../components/primercuad.css';
/*import '../components/segundocuad.css';*/


function pagina2() {
    return (
      <div >
        < Header />
        < Carritocomidas />
        < Primercuad />
        < Segundocuad />
        
        
     
        
        
      </div>
    );
  }
  
  export default pagina2;
