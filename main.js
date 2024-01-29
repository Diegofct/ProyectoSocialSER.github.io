let videoActualIntroduccion = 1;
let videoActualActividad1 = 1;
let videoActualActividad2 = 1;
let videoConclusion = 1;
function mostrarSiguienteVideo() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    if (videoActualIntroduccion === 1) {
        video1.style.display = 'none';
        video2.style.display = 'block';
        videoActualIntroduccion = 2;
    } else {//no puede ir para adelante
        // video1.style.display = 'none';
        // video2.style.display = 'block';
        videoActualIntroduccion = 2;
    }
}

function mostrarVideoAnterior() {
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    if (videoActualIntroduccion === 1) {//no puede ir hacia atras
        // video1.style.display = 'block';
        // video2.style.display = 'none';
        videoActualIntroduccion = 1;
    } else {
        video1.style.display = 'block';
        video2.style.display = 'none';
        videoActualIntroduccion = 1;
    }
}

function anteriorActividad1(){
    //no tiene === 1 porque el anterior no devuelve al 9
    if(videoActualActividad1 ===2){
        const video1 = document.getElementById('video1-actividad1');
        const video2 = document.getElementById('video2-actividad1');
        video1.style.display = "block";
        video2.style.display = "none";
        videoActualActividad1 = 1;
    }
    else if(videoActualActividad1 === 3){
        const video2 = document.getElementById('video2-actividad1');
        const video3 = document.getElementById('video3-actividad1');
        video2.style.display = "block";
        video3.style.display = "none";
        videoActualActividad1 = 2;
    }
    else if(videoActualActividad1 === 4){
        const video3 = document.getElementById('video3-actividad1');
        const video4 = document.getElementById('video4-actividad1');
        video3.style.display = "block";
        video4.style.display = "none";
        videoActualActividad1 = 3;
    }
    else if(videoActualActividad1 === 5){
        const video4 = document.getElementById('video4-actividad1');
        const video5 = document.getElementById('video5-actividad1');
        video4.style.display = "block";
        video5.style.display = "none";
        videoActualActividad1 = 4;
    }
    else if(videoActualActividad1 === 6){
        const video5 = document.getElementById('video5-actividad1');
        const video6 = document.getElementById('video6-actividad1');
        video5.style.display = "block";
        video6.style.display = "none";
        videoActualActividad1 = 5;
    }
    else if(videoActualActividad1 === 7){
        const video6 = document.getElementById('video6-actividad1');
        const video7 = document.getElementById('video7-actividad1');
        video6.style.display = "block";
        video7.style.display = "none";
        videoActualActividad1 = 6;
    }
    else if(videoActualActividad1 === 8){
        const video7 = document.getElementById('video7-actividad1');
        const video8 = document.getElementById('video8-actividad1');
        video7.style.display = "block";
        video8.style.display = "none";
        videoActualActividad1 = 7;
    }
    else if(videoActualActividad1 === 9){
        const video8 = document.getElementById('video8-actividad1');
        const video9 = document.getElementById('video9-actividad1');
        video8.style.display = "block";
        video9.style.display = "none";
        videoActualActividad1 = 8;
    }
}

function siguienteActividad1(){
    if(videoActualActividad1 ===1){
        const video1 = document.getElementById('video1-actividad1');
        const video2 = document.getElementById('video2-actividad1');
        video1.style.display = "none";
        video2.style.display = "block";
        videoActualActividad1 = 2;
    }
    else if(videoActualActividad1 === 2){
        const video2 = document.getElementById('video2-actividad1');
        const video3 = document.getElementById('video3-actividad1');
        video2.style.display = "none";
        video3.style.display = "block";
        videoActualActividad1 = 3;
    }
    else if(videoActualActividad1 === 3){
        const video3 = document.getElementById('video3-actividad1');
        const video4 = document.getElementById('video4-actividad1');
        video3.style.display = "none";
        video4.style.display = "block";
        videoActualActividad1 = 4;
    }
    else if(videoActualActividad1 === 4){
        const video4 = document.getElementById('video4-actividad1');
        const video5 = document.getElementById('video5-actividad1');
        video4.style.display = "none";
        video5.style.display = "block";
        videoActualActividad1 = 5;
    }
    else if(videoActualActividad1 === 5){
        const video5 = document.getElementById('video5-actividad1');
        const video6 = document.getElementById('video6-actividad1');
        video5.style.display = "none";
        video6.style.display = "block";
        videoActualActividad1 = 6;
    }
    else if(videoActualActividad1 === 6){
        const video6 = document.getElementById('video6-actividad1');
        const video7 = document.getElementById('video7-actividad1');
        video6.style.display = "none";
        video7.style.display = "block";
        videoActualActividad1 = 7;
    }
    else if(videoActualActividad1 === 7){
        const video7 = document.getElementById('video7-actividad1');
        const video8 = document.getElementById('video8-actividad1');
        video7.style.display = "none";
        video8.style.display = "block";
        videoActualActividad1 = 8;
    }
    else if(videoActualActividad1 === 8){
        const video8 = document.getElementById('video8-actividad1');
        const video9 = document.getElementById('video9-actividad1');
        video8.style.display = "none";
        video9.style.display = "block";
        videoActualActividad1 = 9;
    }
    //no tiene mas porque para en el 9
}

function anterioractividad2(){
        //no tiene === 1 porque el anterior no devuelve al 3
        if(videoActualActividad2 ===2){
            const video1 = document.getElementById('video1-actividad2');
            const video2 = document.getElementById('video2-actividad2');
            video1.style.display = "block";
            video2.style.display = "none";
            videoActualActividad2 = 1;
        }
        else if(videoActualActividad2 === 3){
            const video2 = document.getElementById('video2-actividad2');
            const video3 = document.getElementById('video3-actividad2');
            video2.style.display = "block";
            video3.style.display = "none";
            videoActualActividad2 = 2;
        }
}

function siguienteActividad2(){
    if(videoActualActividad2 ===1){
        const video1 = document.getElementById('video1-actividad2');
        const video2 = document.getElementById('video2-actividad2');
        video1.style.display = "none";
        video2.style.display = "block";
        videoActualActividad2 = 2;
    }
    else if(videoActualActividad2 === 2){
        const video2 = document.getElementById('video2-actividad2');
        const video3 = document.getElementById('video3-actividad2');
        video2.style.display = "none";
        video3.style.display = "block";
        videoActualActividad2 = 3;
    }
    //no tiene 3 porque el siguiente no va al 1
}

function anteriorConclusion(){
    //no tiene === 1 porque el anterior no devuelve al 2
    if(videoConclusion ===2){
        const video1 = document.getElementById('video1-conclusion');
        const video2 = document.getElementById('video2-conclusion');
        video1.style.display = "block";
        video2.style.display = "none";
        videoConclusion = 1;
    }
}

function siguienteConclusion(){
    if(videoConclusion ===1){
        const video1 = document.getElementById('video1-conclusion');
        const video2 = document.getElementById('video2-conclusion');
        video1.style.display = "none";
        video2.style.display = "block";
        videoConclusion = 2;
    }
    //no tiene 2 porque el siguiente no va al 1
}
