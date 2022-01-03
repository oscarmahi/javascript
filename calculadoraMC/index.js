window.onload = iniciar;

function iniciar(){
  const btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", clickBtnCalcular);
};

function clickBtnCalcular(){
    const p = document.getElementById("txtPeso").value;
    const a = document.getElementById("txtAltura").value;
    alert("El indice de masa corporal es: "+Math.round(p/(a*a)));
};
