window.onload = iniciar;

/*  Para guardar un dato***********************************
function iniciar(){
    let btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click', clickBtnAgregar);
    mostrarNotas();
}

function clickBtnAgregar(){
    let txtNota = document.getElementById('txtNota').value;

    localStorage.nota = txtNota;
    mostrarNotas();
}

function mostrarNotas(){
    let divNotas = document.getElementById('divNotas');
    divNotas.innerHTML = localStorage.nota;

}*/

/*Para guardar un array de datos***************************/ 
function iniciar(){
    let btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click', clickBtnAgregar);

    let btnBorrar = document.getElementById('btnBorrar');
    btnBorrar.addEventListener('click', clickBtnBorrar);

    mostrarNotas();
}

function clickBtnAgregar(){
    let txtNota = document.getElementById('txtNota').value;

    let notas = [];
    if (localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    }
    
    notas.push(txtNota);
    localStorage.notas = JSON.stringify(notas);
    
    mostrarNotas();
}

function mostrarNotas(){
    let divNotas = document.getElementById('divNotas');
        
    let notas = [];
    if (localStorage.notas){
        notas = JSON.parse(localStorage.notas);
    }
    
    let html ='';
    for (let nota of notas){
        html += nota + '<br/>';
    }
    
    divNotas.innerHTML = html;
}

function clickBtnBorrar(){
    localStorage.clear();
    mostrarNotas();
}