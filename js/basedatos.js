//https://www.youtube.com/watch?v=-ojbAy8zbEY&list=PLEKcBvgIDn9KvyKA-hidbijFu00si6QE5&index=1
var base;

class clsBaseDatos {
    constructor() {
        //this.bd = null;
    }

    IniciarBaseDatos(callback) {
        console.log('Iniciando Base de Datos...')
        let solicitudConexion = indexedDB.open('controldb',1);

        solicitudConexion.addEventListener("error", this.MostrarError);
        //solicitudConexion.addEventListener("success", this.Comenzar);
        solicitudConexion.addEventListener("upgradeneeded", this.CrearAlmacen);

        solicitudConexion.onsuccess = function (evento) {
            base = evento.target.result;
            callback();
        }

    }

    MostrarError(evento) {
        Swal.fire({
            title: evento.code,
            text: evento.message,
            icon: "warning"
        });
    }

    Comenzar(callback,evento) {
        //this.bd = evento.target.result;
        base = evento.target.result;
        //console.log('Comenzar: ', this.bd)
    }

    CrearAlmacen(evento) {
        console.log('Creando almacenes de datos...')
        let baseDatos = evento.target.result;
        //let ingresos = baseDatos.createObjectStore('ingresos', { keyPath: "id" });
        let ingresos = baseDatos.createObjectStore('ingresos', { autoIncrement: true });
        let gastos = baseDatos.createObjectStore('gastos', { autoIncrement: true });
        let debito = baseDatos.createObjectStore('debito', { autoIncrement: true });
    }

}





//window.addEventListener("load", this.IniciarBaseDatos);
