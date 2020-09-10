class EventBrite {
    constructor() {
        this.tokenAuth = 'NESTCDYPQ6ZQAY5NPK2T';
        this.ordenar = 'date';
    }

    async obtenerEvento(evento, categoria) {
        const response = await fetch(`https://www.eventbriteapi.com/v3/organization/organization_id/evens/?name=${ evento }&order_by=${ this.ordenar }&categories=${ categoria }&token=${ this.tokenAuth }`);
        const events = response.json();

        return {
            events
        };
    }

    async obtenerCategorias() {
        const categoryResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${ this.tokenAuth }`);
        const categories = await categoryResponse.json();
        
        return categories;
    }

}