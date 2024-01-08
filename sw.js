// imports
importScripts('sw_files.js');

self.addEventListener("install", event => {

	console.log("🆙🆙🆙Evento Install🆗🆗🆗")

})

self.addEventListener("activate", event => {

	console.log("⬆⬆⬆Evento Activate⬆⬆⬆")

	//event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', e => {
	//console.log(e.request.url);     //***PARA VER CUALES ARCHIVOS SE SIRVEN. Y PUEDO GUARDAR LOG
	//console.log(APP_SHELL)

});

