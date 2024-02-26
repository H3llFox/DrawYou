var titoli = ["Benvenuto", "Welcome", "Bienvenido", "Bienvenue", "Willkommen"];

function cambiaTitolo() {
    var titoloElement = document.getElementById("titolo");
    var index = Math.floor(Math.random() * titoli.length);
    titoloElement.style.opacity = '0'; // Imposta l'opacità a 0 prima del cambio
    setTimeout(function() {
        titoloElement.textContent = titoli[index];
        titoloElement.style.opacity = '1'; // Gradualmente riporta l'opacità a 1 dopo il cambio
    }, 500); // Attendere mezzo secondo prima di cambiare il testo per consentire il fade-out
}

cambiaTitolo();
setInterval(cambiaTitolo, 5000);