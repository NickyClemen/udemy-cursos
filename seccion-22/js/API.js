class API {
    constructor() {
        this.total = 1000;
        this.URL = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${ this.total }`;
    }
    
    async obtenerDatos() {
        const datos = await fetch(this.URL);
        const response = await datos.json();

        return response;
    }
}