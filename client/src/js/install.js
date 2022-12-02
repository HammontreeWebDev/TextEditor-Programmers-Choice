const butInstall = document.getElementById('buttonInstall');

// Make the install button visible
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});
// hide button when clicked
butInstall.addEventListener('click', async () => {
    const installApp = window.deferredPrompt;
    if (!installApp) {
        return;
    }
    installApp.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// App installed! remove prompt
window.addEventListener('appinstalled', (event) => { 
    window.deferredPrompt = null;
    console.log('App installed!');
});
