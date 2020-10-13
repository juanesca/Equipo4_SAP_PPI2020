import React from "react";
import { withRouter } from 'react-router-dom';
import '../App.css';

function Header(props) {
    const { history } = props;
    
    return (
        <div>
            <header className="navbar navbar-light bg-light shadow-sm container-fluid">
                <section className="navbar-brand border border-dark w-70 m-0 pl-3">
                    <span className="navbar-toggler-icon" ></span>
                    <span className="SinStella">{" "}
          RECAPITO{" "}</span>
                </section>
                <section
                    onClick={() => history.push('/Perfil')}
                    className="navbar-brand text-center border border-dark w-30 m-0">
                        <figure className="d-inline m-0">
                            <img className="rounded-circle" src={require('../images/perfil.PNG')} alt="" width="30 px" height="30 px" />
                            <figcaption className="d-inline SinStella">ALGUIEN</figcaption>
                        </figure>
                </section>
            </header>
        </div>
    );
}

export default withRouter(Header);