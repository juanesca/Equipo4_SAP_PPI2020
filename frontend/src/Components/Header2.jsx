import React from "react";
import { withRouter } from 'react-router-dom';
import '../App.css';

function Header(props) {
    const { history } = props;
    const style1 = {
        backgroundImage: 'url("../images/perfil.PNG")'
    };

    return (
        <div>
            <header className="navbar navbar-light bg-light shadow-sm">
                <section className="navbar-brand border border-dark w-70 m-0 pl-3">
                    <span className="navbar-toggler-icon" ></span>
                    <span>{" "}
          RECAPITO{" "}</span>
                </section>
                <section
                    onClick={() => history.push('/Perfil')}
                    className="navbar-brand text-center border border-dark w-30 m-0">
                        <h1 className="text-hide" id="imgheader"></h1>
                    <span>ALGUIEN</span>
                </section>
            </header>
        </div>
    );
}

export default withRouter(Header);