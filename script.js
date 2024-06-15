var video = document.getElementById("myVideo");
video.volume = 0.5; // Establece el volumen al 50% (0.0 - 1.0)
document.getElementById("playButton").addEventListener("click", function() {
    var video = document.getElementById("myVideo");
    video.volume = 0.5; // Establece el volumen al 50% al hacer clic en el botón de reproducción
    video.play();
  });
  
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Ocultar cabecera al scrollear hacia abajo y mostrar al scrollear hacia arriba
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

let isTransmitting = false;

function startRecording() {
    if (!isTransmitting) {
        document.getElementById('status').innerText = "Estado: Transmitiendo en vivo";
        document.getElementById('startRecording').disabled = true;
        document.getElementById('stopRecording').disabled = false;
        isTransmitting = true;
        // Lógica para iniciar la transmisión
        console.log("Comenzar Transmisión");
    }
}

function stopRecording() {
    if (isTransmitting) {
        document.getElementById('status').innerText = "Estado: No transmitiendo";
        document.getElementById('startRecording').disabled = false;
        document.getElementById('stopRecording').disabled = true;
        isTransmitting = false;
        // Lógica para detener la transmisión
        console.log("Detener Transmisión");
    }
}

function uploadClips() {
    const files = document.getElementById('fileInput').files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            // Lógica para subir cada archivo
            console.log("Subiendo clip:", files[i].name);
        }
        alert('Clips subidos exitosamente!');
    } else {
        alert('Por favor, selecciona uno o más clips para subir.');
    }
}

// Ocultar cabecera al scrollear hacia abajo y mostrar al scrollear hacia arriba
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.querySelector('header').style.top = '-70px';
        document.querySelector('footer').style.bottom = '-50px';
    } else {
        document.querySelector('header').style.top = '0';
        document.querySelector('footer').style.bottom = '0';
    }
    lastScrollTop = currentScroll;
});

document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var statusMessage = document.getElementById("statusMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

        var formData = new FormData(contactForm);
        var xhr = new XMLHttpRequest();

        xhr.open("POST", contactForm.action);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;

            if (xhr.status === 200) {
                statusMessage.innerHTML = "Mensaje enviado correctamente. ¡Gracias!";
                contactForm.reset(); // Reinicia el formulario
            } else {
                statusMessage.innerHTML = "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.";
            }
        };

        xhr.send(formData);
    });
});

