window.onload = cargarJson;

async function cargaUrl(url){
    const respuesta = await fetch(url);
    return respuesta.json();
}

async function cargarJson(){

    //llamadas de ejemplo a una API que me devuelve los datos
    //const  usuariosJson = await cargaUrl('https://jsonplaceholder.typicode.com/usuarios');
    //const  historialUsuario = await cargaUrl('https://jsonplaceholder.typicode.com/historial');

    const json = await cargaUrl('https://jsonplaceholder.typicode.com/todos/1');
 
    const spanNombrePost= document.getElementById('txtNombrePost');
    spanNombrePost.innerText = json.title;

    const spanCompletoPost= document.getElementById('txtCompleto'); // esto devuelve un valor boolean
    if (json.completed){
        spanCompletoPost.innerText =' Esta completo';
    }else{
        spanCompletoPost.innerText =' No Esta completo';
    }
    //spanCompletoPost.innerText = json.completed ? 'Esta completo' : 'No esta completo';

 };
