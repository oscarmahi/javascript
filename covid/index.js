window.onload = start;

function start(){
    const btnCargar = document.getElementById("btnCargar");
    btnCargar.addEventListener('click', clickBoton);
}   

async function cargarUrl(url){
    const response = await fetch(url);
    return response.json();
}

async function clickBoton(){
    const selectPais = document.getElementById('selectPais').value;
    const inputFecha = document.getElementById('inputFecha').value;

    const url = `https://api.covid19tracking.narrativa.com/api/${inputFecha}/country/${selectPais}`;
    const json = await cargarUrl(url);
    console.log(json);
    const estadisticas = json.dates[inputFecha].countries[selectPais];
    console.log(estadisticas);

    document.getElementById('tc').innerHTML = estadisticas.today_confirmed;
    document.getElementById('td').innerHTML = estadisticas.today_deaths;
    document.getElementById('thp').innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
    document.getElementById('tic').innerHTML = estadisticas.today_intensive_care;
    document.getElementById('tnc').innerHTML = estadisticas.today_new_confirmed;
    document.getElementById('tnd').innerHTML = estadisticas.today_new_deaths;
    document.getElementById('tnh').innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
    document.getElementById('tni').innerHTML = estadisticas.today_new_intensive_care;
    document.getElementById('tno').innerHTML = estadisticas.today_new_open_cases;
    document.getElementById('tnr').innerHTML = estadisticas.today_new_recovered;
    document.getElementById('tnt').innerHTML = estadisticas.today_new_total_hospitalised_patients;

}

