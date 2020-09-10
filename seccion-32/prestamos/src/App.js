import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ plazo, guardarPlazo ] = useState('');
  const [ total, guardarTotal ] = useState(0);
  const [ cargando, guardarCargando ] = useState(false);

  return (
    <Fragment>
      <Header 
        title="Cotizador de préstamos" // Puede ser cualquier tipo de dato.
      />

      <div className="container">
        <Form 
          cantidad = { cantidad }
          guardarCantidad = { guardarCantidad }
          plazo = { plazo }
          guardarPlazo = { guardarPlazo }
          guardarTotal = { guardarTotal }
          guardarCargando = { guardarCargando }
        />
        
        <div className="mensajes">
          { 
            cargando 
              ? <Spinner />
              : (total === 0) 
              ? <Mensaje />
              : <Resultado 
                  total = { total }
                  plazo = { plazo }
                  cantidad = { cantidad }
                />
          } 
        </div>
      </div>
    </Fragment>
  ); /* Cuando se tiene un return, siempre hay que tener un elemento que contenga a los
  demás. Si no se quiere colocar elementos extra, se importa Fragment. 
  Un fragment es como un div, pero no va a mostrarse en el front end. */
} /* En React, los datos fluyen de los componentes padres a los hijos. */

export default App;
