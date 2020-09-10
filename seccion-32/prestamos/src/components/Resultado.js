import React from 'react';

const Resultado = ({ total, plazo, cantidad }) => ( 
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es ${ cantidad } a pagar en { plazo } meses.</p>
        <p>Su cuota mensual será de ${ (total / plazo).toFixed(2) }.</p>
        <p>El total a pagar es de ${ (total).toFixed(2) }.</p>
    </div> 
);

 
export default Resultado;