//let nombres = ["pedro","maria","jorge"];

//document.write("<b style='color:red'>"+nombres+"</b><br/>");

//let resultado = nombres.shift();


//document.write(resultado+"<br/>");

//let agrego = nombres.push("juancito", "roberto");

//document.write(agrego+"<br/");

//document.write("<b style='color:red'>"+nombres+"</b><br/>");

//let numeros = [1,2,3,4,5]

//document.write(numeros+"<br/>");

//numeros.reverse();

//document.write(numeros+"<br/>");

//-----------------------------------------------------------------------

let numero = Math.random() * 100;
document.write(numero+"<br/>");

numero = numero.toString();

let num = numero[0] + numero[1];

document.write(num+"<br/>");
//esto es lo mismo pero con la funcion round
numero = Math.random() * 100;
numero = Math.round(numero);
document.write(numero);