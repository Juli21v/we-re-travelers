const logout = document.getElementById("logout");
const loginuser = document.getElementById("loginuser");
let pre1 = document.getElementById("pre1");
let pre2 = document.getElementById("pre2");
let pre3 = document.getElementById("pre3");
let pre4 = document.getElementById("pre4");
let pre5 = document.getElementById("pre5");
let pre6 = document.getElementById("pre6");

const iniciarSesion = () =>{
    let usuario = prompt ("Ingresa un Nickname").toLowerCase();
    localStorage.setItem("nickname", usuario);
    loginuser.innerHTML = usuario;
};
if (localStorage.getItem("nickname")) {
    loginuser.innerHTML = localStorage.getItem("nickname");
}

const cerrarSesion = () =>{
    loginuser.innerHTML = " ";
    localStorage.clear();
};


const pregunta1 = () => {
    let respuesta = prompt(
      "¿Cómo se llama el monstruo en ´´Journey the center of the earth``?"
    ).toLowerCase();
    switch (respuesta) {
      case "lava monster":
        alert("Respuesta correcta! :D");
        break;
      default:
        alert("Respuesta incorrecta! D:");
        break;
    }
  };
  const pregunta2 = () => {
    let respuesta = prompt(
      "¿Cómo se llama la atracción en ´´Drayton manor``?"
    ).toLowerCase();
    switch (respuesta) {
      case "shark pirates":
        alert("Respuesta correcta! :D");
        break;
      default:
        alert("Respuesta incorrecta! D:");
        break;
    }
  };
  const pregunta3 = () => {
    let respuesta = prompt(
      "¿En qué parque se encuentra el ´´Cymbospondylus``?"
    ).toLowerCase();
    switch (respuesta) {
      case "triassic park":
        alert("Respuesta correcta! :D");
        break;
      default:
        alert("Respuesta incorrecta! D:");
        break;
    }
  };
  const pregunta4 = () => {
    let respuesta = prompt(
      "¿Qué parque está rodeado de dinosaurios animatrónicos?"
    ).toLowerCase();
    switch (respuesta) {
      case "sea world gold coast":
        alert("Respuesta correcta! :D");
        break;
      default:
        alert("Respuesta incorrecta! D:");
        break;
    }
  };
  const pregunta5 = () => {
    let respuesta = prompt(
      "¿En qué parque hay un tiburon en medio de la cena?"
    ).toLowerCase();
    switch (respuesta) {
      case "drayton manor":
        alert("Respuesta correcta! :D");
        break;
      default:
        alert("Respuesta incorrecta! D:");
        break;
    }
  };
  const pregunta6 = () => {
    let respuesta = prompt(
      "¿Qué miedo presentan los visitantes al ver animatronicos de gran tamaño o bajo el agua?"
    ).toLowerCase();
    switch (respuesta) {
      case "submecanofobia":
        alert("Respuesta correcta! :D");
        break;
        case "megalofobia":
        alert("Respuesta correcta! :D");
        break;
      default:
        alert("Respuesta incorrecta! D:");
        break;
    }
  };
  

  pre1.onclick = function () {
    pregunta1();
 };
 pre2.onclick = function () {
   pregunta2();
 };
 pre3.onclick = function () {
   pregunta3();
 };
 pre4.onclick = function () {
   pregunta4();
 };
 pre5.onclick = function () {
   pregunta5();
 }
 pre6.onclick = function () {
   pregunta6();
 }
 login.onclick = function () {
     iniciarSesion();
 };
 logout.onclick = function () {
     cerrarSesion();
 }