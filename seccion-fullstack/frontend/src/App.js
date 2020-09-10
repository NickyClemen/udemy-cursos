import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  const [ citas, guardarCitas ] = useState([]);
  const [ consultar, guardarConsulta ] = useState(true);

  useEffect(() => {
    if(consultar) {
      const executeAPI = () => {
      clienteAxios.get('/pacientes')
        .then(response => { 
          guardarCitas(response.data);
          guardarConsulta(false);
        })
        .catch(reject => console.log(reject.message));
      }

      executeAPI();
    }
  }, [consultar]); /* Se ejecuta automáticamente cuando se carga la interfaz.
  Se recomienda consumir APIs acá. */

  return (
    <Router>
      <Switch>
        <Route 
          exact path = "/"
          component = { () => <Pacientes citas={ citas } /> }
        />
        <Route 
          exact path = "/nueva"
          component = { () => <NuevaCita guardarConsulta = { guardarConsulta } /> }
        />

        <Route 
          exact path = "/cita/:id"
          render = { (props) => {
              const cita = citas.filter(cita => cita._id === props.match.params.id);
              return(<Cita 
                cita = { cita[0] }
                guardarConsulta = { guardarConsulta }
              />);
            }
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
