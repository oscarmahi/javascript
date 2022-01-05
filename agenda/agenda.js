window.onload = iniciar;

var personas = [];

function iniciar(){
    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", fcnAgregar);
}

function fcnAgregar(){
    let txtNombre = document.getElementById("txtNombre").value;
    let txtApellidos = document.getElementById("txtApellido").value;
    let txtTelefono = document.getElementById("txtTelefono").value;
    let txtEmail = document.getElementById("txtEmail").value;

    let persona = {
        nombre : txtNombre,
        apellidos : txtApellidos,
        telefono : txtTelefono,
        email : txtEmail
    };
    personas.push(persona);

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtTelefono").value = '';
    document.getElementById("txtEmail").value = '';

    mostrarPersonas();
}

function mostrarPersonas(){
    let listado = document.getElementById("listado");
    let html = "";
    for (let pers of personas) {
        html += `Nombre: ${pers.nombre}`+' '+
                `Apellido: ${pers.apellidos}`+' '+
                `Telefono: ${pers.telefono}`+' '+
                `Email: ${pers.email}`+'<br/>';
        //html += pers.nombr+' '+pers.apellidos+' '+pers.telefono+' '+pers.email;
    }
    listado.innerHTML = html;
}