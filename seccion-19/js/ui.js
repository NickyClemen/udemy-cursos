class UserInterface {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        api.obtenerMonedasApi()
            .then(monedas => {
                const select = document.querySelector('#criptomoneda');
                for(const [key, value] of Object.entries(monedas.monedas.Data)) {
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            });
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        const divMensajes = document.querySelector('.mensajes');

        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        divMensajes.appendChild(div);

        setTimeout(() => {
            const alertas = document.querySelector('.mensajes div');
            alertas.remove();
        }, 3000);
    }

    mostrarResultado(resultado, moneda, criptomoneda) {
        const datosMoneda = resultado[criptomoneda][moneda];
        let precio = datosMoneda.PRICE.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');
        const result = document.getElementById('resultado');
        const resultadoAnterior = document.querySelector('#resultado > div');
        let templateHtml;

        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        templateHtml = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado</h2>
                    <p>El precio de ${ datosMoneda.FROMSYMBOL } a moneda ${ datosMoneda.TOSYMBOL } es de $${ precio }</p>
                    <p>Variación del último día ${ datosMoneda.CHANGEPCTDAY }%.</p>
                    <p>Última actualización ${ actualizado }.</p>
                </div>
            </div>
        `;
        
        this.viewSpinner('block');

        setTimeout(() => {
            result.innerHTML = templateHtml;
            this.viewSpinner('none');
        }, 3000);
    }

    mostrarError() {
        const result = document.getElementById('resultado');
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        let templateHtml = `
            <div class="card bg-danger">
                <div class="card-body text-light">
                    <h2 class="card-title">Error</h2>
                    <p>No existe cotización para la criptomoneda elegida. Por favor, reintente de nuevo.</p>
                </div>
            </div>
        `;

        this.viewSpinner('block');

        setTimeout(() => {
            result.innerHTML = templateHtml;
            this.viewSpinner('none');
        }, 3000);
    }

    viewSpinner(value) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = value;
    }
}