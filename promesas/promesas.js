window.onload = cargarJson;

function cargarJson(){
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then(response => response.json())
    //.then(jsonCargado);
    
    
    let promesa = new Promise(resolver => {
        //ponemos el timeout para simular que es un proceso pesado que va a tardar
        setTimeout( () => {
            let json = {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              };
              resolver(json);
        }, 2000);
    });
    
    promesa.then(json =>{
        jsonCargado(json);  
    })
 
    
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