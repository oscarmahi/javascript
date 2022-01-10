window.onload = cargarJson;

function cargarJson(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(jsonCargado);
};

function jsonCargado(json){

    let spanNombrePost= document.getElementById('txtNombrePost');
    spanNombrePost.innerText = json.title;

    let spanCompletoPost= document.getElementById('txtCompleto'); // esto devuelve un valor boolean
    if (json.completed){
        spanCompletoPost.innerText =' Esta completo';
    }else{
        spanCompletoPost.innerText =' No Esta completo';
    }
    //spanCompletoPost.innerText = json.completed ? 'Esta completo' : 'No esta completo';
     

    console.log(json);
};