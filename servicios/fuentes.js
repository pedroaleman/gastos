class FuentesService {
    constructor(apiUrl) {
        this.apiUrl = API_BASE_URL+'fuentes';
    }

    async getItems() {
        const response = await fetch(`${this.apiUrl}/`);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        //console.log('getItems: ',response);
        return response.json();
    }

    async getItem(id) {
        const response = await fetch(`${this.apiUrl}/${id}`);
        return response.json();
    }   
}
