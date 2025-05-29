function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function validarClave() {
    const clave = document.getElementById('clave').value;
    if (clave === 'si papi') {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('opciones').style.display = 'flex';
    } else {
    alert('Clave incorrecta');
    }
}

function confirmar(opcion) {
    const data = {
    cine: {
        lugar: ' a joder a los polis csmr!!',
        hora: '7:00 PM',
        llevar: 'awa porque vas a correr como mrd'
    },
    parque: {
        lugar: ' el Sábado a joder a Ana a su casa 🏠',
        hora: '4:00 PM',
        llevar: 'tu hambre y ganas de joder'
    },
    playa: {
        lugar: ' a la RENIEC crj!! 👤',
        hora: '10:00 AM',
        llevar: 'bloqueador por si hace calor y ganas de joder a Dina'
    }
    };

    const c = data[opcion];
    const contenedor = document.getElementById('confirmacionContenido');
    contenedor.innerHTML = `
    <h2>Cita confirmada</h2>
    <p>Nos vamos${c.lugar}</p>
    <p>Hora: ${c.hora}</p>
    <p>No olvides llevar: ${c.llevar}</p>
    `;

    document.getElementById('opciones').style.display = 'none';
    document.getElementById('confirmacion').style.display = 'flex';
}

function cerrarConfirmacion() {
    document.getElementById('confirmacion').style.display = 'none';
    document.getElementById('destruccion').style.display = 'flex';

    let contador = 5;
    const intervalo = setInterval(() => {
    document.getElementById('contador').textContent = contador;
    if (contador === 0) {
        clearInterval(intervalo);
        document.getElementById('destruccion').innerHTML = '<div class="modal-content"><h2>Chau kkner@</h2></div>';
        setTimeout(() => {
        window.location.href = 'about:blank';
        }, 1000);
    }
    contador--;
    }, 1000);
}