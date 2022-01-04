window.onload = iniciar;

var listaTareas = [];

function iniciar(){
    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

};

function clickBtnAgregar(){
    let txtTarea=document.getElementById("txtTarea").value;
    listaTareas.push(txtTarea);
    document.getElementById("txtTarea").value="";
    mostrartareas();
};

function mostrartareas(){
    let listado=document.getElementById("listado");
    let html="";
    for (let tarea of listaTareas){
        html+=tarea + "<br/>";
    }
    listado.innerHTML=html;
}

