window.onload = inicio;

function inicio(){

    const timer = setInterval( ()=> alert('Tiempo cumplido'), 1000);
    
    setTimeout( () => {
        clearInterval(timer)     //para matar el timer despues de 10seg
    }
     , 10000);

};