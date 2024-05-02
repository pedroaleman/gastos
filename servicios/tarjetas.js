class TarjetasService {
    constructor(apiUrl) {
        this.apiUrl = API_BASE_URL+'tarjetas';
    }

    async getItems() {
        const response = await fetch(`${this.apiUrl}/`);
        //console.log('getItems: ',response);
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    }

    async getItem(id) {
        const response = await fetch(`${this.apiUrl}/${id}`);
        return response.json();
    }

    async createItem(item) {
        const response = await fetch(`${this.apiUrl}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        return response.json();
    }

    async updateItem(id, item) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        return response.json();
    }

    async deleteItem(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    }
}
