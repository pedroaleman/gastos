const API_BASE_URL = 'https://backend-centavo-production.up.railway.app/api/1.0/';//'http://localhost:3000/api/1.0/'; 

function MostrarError(msg) {
    Swal.fire({
            title: "Error",
            text: msg,
            icon: "error"
        });
}

function MostrarExito(msg) {
    Swal.fire({
        title: "Éxito",
        text: msg,
        icon: "success"
    });
}