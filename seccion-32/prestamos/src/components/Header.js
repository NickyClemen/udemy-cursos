import React, { Fragment } from 'react';

function Header({ title }) {
    // Se puede colocar código standard de JS fuera del return.
    // Se puede aplicar destructuring a los props.
    return(
        <Fragment>
            <h1>{ title }</h1> {/* JSX permite mezclar HTML con JS. Lo que está en
            llaves, es JS. */}
        </Fragment>
        
    );
}

/* En la versión anterior de React, los componentes eran clases. Ahora son funciones.
Para crearlas, se puede utilizar fuction declaration (function expression).
El beneficio de este tipo de sintáxis, es que el return está implítico.
Si se da implícito el return, no se puede seguir agregando código JS (no hay dónde colocarlo).
const Header = ({ title }) => (
    <h1>{ title }</h1> 
); */

export default Header;