import React from 'react';
import Carritocomidas from '../Components/carritocomidas';
import Header from '../Components/Header';
import Primercuad  from '../Components/primercuad';
import Segundocuad from '../Components/segundocuad';
import '../Components/primercuad.css';
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
