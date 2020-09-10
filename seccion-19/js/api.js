class Api {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async obtenerMonedasApi() {
        const URL = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${ this.apiKey }`;
        const obtenerMonedas = await fetch(URL);
        const monedas = await obtenerMonedas.json();

        return { monedas }
    }

    async obtenerValores(moneda, criptomoneda) {
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }&api_key=${ this.apiKey }`;
        const fetchData = await fetch(URL);
        const response = await fetchData.json();

        return { response }
    }
}