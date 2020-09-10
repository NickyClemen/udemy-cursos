import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers.js';

const Form = (props) => {
    const { 
        cantidad, 
        guardarCantidad, 
        plazo, 
        guardarPlazo,
        guardarTotal,
        guardarCargando,
    } = props;

    /* Lo que hace que las aplicaciones de React sean rápidas, es el state.
    useState retorna dos valores: Una variable que contiene el valor y una función
    para iteractuar con el state.
    En React, los datos flujen el padre al hijo; nunca del hijo al padre. */
    const [ error, guardarError ] = useState(false);

    const handleChange = (e) => {
        guardarCantidad(parseInt(e.target.value));
    }
    
    const handleChangeSelect = (e) => {
        guardarPlazo(parseInt(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(cantidad === 0 || plazo === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarCargando(true);

        setTimeout(() => {

            /* Helpers: Un archivo de funciones que se pueden importar. */
            const total = calcularTotal(cantidad, plazo);
            
            guardarTotal(total);

            guardarCargando(false);
        }, 3000);

    }

    return (
        <Fragment>
            <form 
                onSubmit={ handleSubmit }
            >
                <div className="row">
                    <div>
                        <label>Cantidad préstamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ handleChange }
                        />{ /* Los eventos tienen un on adelante. En React, se recomienda poner
                        un handler. */ }
                    </div>
                    <div>
                        <label>Plazo para pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ handleChangeSelect }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            {
                error 
                ? <p className="error">Todos los campos son obligatorios.</p> 
                : null
            }
        </Fragment>
    );
}
 
export default Form;