let videoActual = 1;

function mostrarSiguienteVideo() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const botonAnterior = document.getElementById('btnAnterior');
    const botonSiguiente = document.getElementById('btnSiguiente');

    if (videoActual === 1) {
        video1.style.display = 'none';
        video2.style.display = 'block';
        videoActual = 2;
        botonAnterior.style.display = 'block';
        botonSiguiente.style.display = 'none';
    } else {
        video2.style.display = 'none';
        video1.style.display = 'block';
        videoActual = 1;
        botonAnterior.style.display = 'none';
        botonSiguiente.style.display = 'block';
    }
}

function mostrarVideoAnterior() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const botonAnterior = document.getElementById('btnAnterior');
    const botonSiguiente = document.getElementById('btnSiguiente');

    if (videoActual === 1) {
        video2.style.display = 'none';
        video1.style.display = 'block';
        videoActual = 1;
        botonAnterior.style.display = 'none';
        botonSiguiente.style.display = 'block';
    } else {
        video1.style.display = 'none';
        video2.style.display = 'block';
        videoActual = 2;
        botonAnterior.style.display = 'block';
        botonSiguiente.style.display = 'none';
        video2.style.display = 'none'
        video1.style.display = 'block'
        botonSiguiente.style.display = 'block'
        botonAnterior.style.display = 'none'
    }
}





 



