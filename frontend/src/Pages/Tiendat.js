import React from 'react';
import { withRouter } from 'react-router-dom';

import './css/Tiendat.css';


function Tiendat(props) {
  const { history } = props;
  return (
    <main>
     <div>
      <header className="navbar navbar-light bg-light shadow-sm">
        <section className="navbar-brand border border-dark w-70 m-0 pl-3">
          {" "}
          RECAPITO{" "}
        </section>
        <section className="navbar-brand text-center border border-dark w-30 m-0">
          {" "}
          ALGUIEN{" "}
        </section>
      </header>
    </div>
    <div class="card-align">
    <div class="card border-dark mb-3">
  <div class="card-header">TIENDA</div>
  <img height="200px" src="https://clyco.com.co/wp/wp-content/uploads/2017/04/logo-electroferia.jpg" class="card-img-top" alt="..."/>
 
  
  <div class="card-body text-dark"> 
  </div>
</div>
    <div class="card border-dark mb-3">
  <div class="card-header">TIENDA</div>
  <img height="200px" src="https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/p960x960/28951601_1729020643786874_7882322636741541888_o.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=fru9Fk3VRngAX-C7-vF&_nc_ht=scontent.fbog11-1.fna&oh=38ff82c653bb2ece219f75c80767e9bd&oe=5F96A014" class="card-img-top" alt="..."/>
  
  <div class="card-body text-dark"> 
</div>
</div>
    <div class="card border-dark mb-3">
  <div class="card-header">TIENDA</div>
  <img height="200px" src="https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/49949793_383087872465304_5017284020984086528_n.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=t4z_ejC3qUAAX9rjG1H&_nc_ht=scontent.fbog11-1.fna&oh=287a9194c55673f2c127d926b03a9f27&oe=5F954FCA" class="card-img-top" alt="..."/>
  

  <div class="card-body text-dark"> 
 </div>
</div>
    <div class="card border-dark mb-3">
  <div class="card-header">TIENDA</div>
  <img height="200px" src="https://scontent.fbog10-1.fna.fbcdn.net/v/t1.0-9/p960x960/35362315_1684916714957820_1863134376095645696_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=kc_YiLF8D34AX_790Jj&_nc_ht=scontent.fbog10-1.fna&tp=6&oh=e1f27596c433db6a036ede4ecb1fa279&oe=5F96474D " class="card-img-top" alt="..."/>
  
  
  <div class="card-body text-dark"> 
  </div>
</div>
    <div class="card border-dark mb-3">
  <div class="card-header">TIENDA</div>
  <img height="200px" src="https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/13221508_1256640181027909_6062184418367228432_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=QMmUla4uQIgAX-LD9eq&_nc_ht=scontent.fbog11-1.fna&oh=f3052c2d46f910dcdcd9fe50861927e3&oe=5F95C9A7 " class="card-img-top" alt="..."/>
  
  <div class="card-body text-dark"> 
  </div>
</div>
    <div class="card border-dark mb-3">
  <div class="card-header">TIENDA</div>
  <img height="200px" src="data:image/jpeg;base64,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"  onClick={()=> history.push('/TiendaTe')} class="card-img-top" alt="..."/>
  
  <div class="card-body text-dark"> 
  </div>
</div>
</div>


    </main>
  );
}

export default withRouter(Tiendat);
