setInterval( ()=>{
    const reloj = document.getElementsByClassName("reloj")[0];
    const tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    if (hora<10){
        hora = `0${hora}`;
    }

    let minutos = tiempoActual.getMinutes();
    if (minutos<10){
        minutos = `0${minutos}`;
    }

    let segundos = tiempoActual.getSeconds();
    if (segundos<10){
        segundos = `0${segundos}`;
    }
    reloj.innerHTML = `${ hora }:${ minutos}:${segundos}`;
}, 1000);