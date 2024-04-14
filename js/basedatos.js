//https://www.youtube.com/watch?v=-ojbAy8zbEY&list=PLEKcBvgIDn9KvyKA-hidbijFu00si6QE5&index=1
var base;

class clsBaseDatos {
    constructor() {
        //this.bd = null;
    }

    ObtieneDatos(nombreBase) {
        return new Promise((resolve, reject) => {
            let transaccion = base.transaction([nombreBase]);
            let ingresos = transaccion.objectStore(nombreBase);
            let puntero = ingresos.openCursor();
            let datosArray = []; // Array to store the cursor values

            puntero.onsuccess = function (evento) {
                let puntero = evento.target.result;
                if (puntero) {
                    // Add the cursor value to the array
                    let object = {
                        key: puntero.key,
                        value: puntero.value
                    };
                    datosArray.push(object);
                    
                   

                    puntero.continue();
                } else {                  
                    resolve(datosArray);
                }
            }

            puntero.onerror = function (event) {
                console.log("Error al leer datos", event);
                reject(event);
            }
        });
    }


    IniciarBaseDatos(callback) {
        console.log('Iniciando Base de Datos...')
        let solicitudConexion = indexedDB.open('controldb',4);

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
        if (!baseDatos.objectStoreNames.contains('ingresos')) 
            baseDatos.createObjectStore('ingresos', { autoIncrement: true });
        if (!baseDatos.objectStoreNames.contains('gastos')) 
            baseDatos.createObjectStore('gastos', { autoIncrement: true });
        if (!baseDatos.objectStoreNames.contains('debito')) 
            baseDatos.createObjectStore('debito', { autoIncrement: true });
        

        if (!baseDatos.objectStoreNames.contains('credito')) 
            baseDatos.createObjectStore('credito', { autoIncrement: true });
          

    }

}





//window.addEventListener("load", this.IniciarBaseDatos);
