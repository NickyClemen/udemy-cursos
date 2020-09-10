class UI {
    constructor() {
        this.API = new API();
        this.markers = new L.LayerGroup();
        // Iniciar el mapa
        this.mapa = this.inicializarMapa();
    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
        }).addTo(map);

        return map;
    }

    mostrarEstablecimientos() {
        this.API.obtenerDatos()
            .then(datos => {
                const result = datos.results;
                this.mostrarPines(result);
            })
            .catch(reject => console.error(reject.message));
    }

    mostrarPines(datos) {
        this.markers.clearLayers();
        datos.forEach(dato => {
            const { latitude, longitude, calle, regular, premium } = dato;
            const opcionesPopUp = L.popup()
                .setContent(`
                    <p>Calle: ${ calle }</p>
                    <p><strong>Regular: $${ regular }</strong></p>
                    <p><strong>Premium: $${ premium }</strong></p>
                `);
            const marker = new L.marker([parseFloat(latitude), parseFloat(longitude)])
                .bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda) {
        this.API.obtenerDatos()
            .then(datos => {
                const result = datos.results;
                this.filtrarSugerencias(result, busqueda);
            })
            .catch(reject => console.error(reject.message));
    }

    filtrarSugerencias(result, busqueda) {
        const filtro = result.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
        this.mostrarPines(filtro);
    }
}