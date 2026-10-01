//les dues variables són diferents 
let nom = "Ana";
let Nom = "Dani"
/*
Esto es un comentario
*/
//Las constantes son variables que no cambian su valor
const G = 9.8;
const Pi = 3.1415;

nom = "Pepe";
//Definimos la función
function saluda() {
    let valor = document.getElementById("campNom").value;
    document.getElementById("resultat").innerHTML = "Hola, " + valor;
}
//llamamos a la función
function comprovaLogin() {
    let usuari = document.getElementById("usuari").value;
    let password = document.getElementById("password").value;
/*
    if (usuari == "admin" && password =="1234") {
        alert("Sessió iniciada")
    }
    else {
        alert("Usuari o contrassenya incorrectes")
    }  */
    if (usuari != "admin" && password == "1234") {
        alert ("Usuari incorrecte")
    }
    if (usuari == "admin" && password != "1234") {
        alert ("Contrasenya incorrecte")
    }
    if (usuari != "admin" && password != "1234") {
        alert ("Usuari incorrecte i Contrasenya incorrecte")
    }
}
saluda(nom)

function calcularPrecio() {
    const precio = document.getElementById("precio").value;
    let radioSÍ = document.getElementById("residenteSÍ").checked;
    let radioNO = document.getElementById("residenteNO").checked;

    let radiofng = document.getElementById("fnumerosag").checked;
    let radiofne = document.getElementById("fnumerosae").checked;
    let radionfn = document.getElementById("familiaNO").checked; 
    //Residente y Ninguna
    if(radioSÍ == true && radionfn == true) {
        let precioFinal = precio *0.25;
        alert(precioFinal); 
    }
    //Residente y General
    else if (radioSÍ == true && radiofng == true) {
        let precioFinal = precio *0.2;
        alert(precioFinal);
    }
    //Residente y Escpecial
    else if (radioSÍ == true && radiofne == true) {
        let precioFinal = precio *0.15;
        alert(precioFinal);
    }
    //No Residente y General
    else if (radioNO == true && radiofng == true) {
        let precioFinal = precio *0.95;
        alert(precioFinal);
    }
    //No Residente y Especial
    else if (radioNO == true && radiofne == true) {
        let precioFinal = precio *0.9;
        alert(precioFinal);
    }
    //Residente y Ninguna
    else if (radioNO == true && radionfn == true) {
        let precioFinal = precio;
        alert(precioFinal);
    }
    //Nada marcado 
    else {      
        alert("Tienes que marcar una casilla");
    }
}  
