//https://web.dev/articles/codelab-make-installable?hl=es-419

var url = window.location.href;
var swLocation = '/gastos/sw.js';


if (navigator.serviceWorker) {
    console.log('✅✅✅ Permite Service Worker***')

    if(url.includes('localhost')){
        swLocation = '/sw.js';
    }
    

    navigator.serviceWorker.register(swLocation).then(res => {
        console.log("✅✅✅Se registró correctamente el service worker✔✔💯")
    }).catch(err => {
        console.log("🔴🔴🔴No se registró el service worker❌❌❌")
    });
}
else {
    console.log('🚫🚫🚫No Permite Service Worker❌❌❌')
}

//Para cuando se pierde la conexión y la recuperamos, sincronizar
self.addEventListener('sync', event => {
    console.log('Tenemos conexión...')
    console.log(event)
    console.log(event.tag)

});

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    divInstall.classList.toggle('hidden', false);
  });

/*   butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  }); */

  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
  });

