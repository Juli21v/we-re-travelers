const login = document.getElementById("login");
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
    "¿Donde se encuentra el parque tayrona?"
  ).toLowerCase();
  switch (respuesta) {
    case "sierra nevada":
      alert("Respuesta correcta! :D");
      break;
    default:
      alert("Respuesta incorrecta! D:");
      break;
  }
};

const pregunta2 = () => {
  let respuesta = prompt(
    "¿Cual es uno de Los cinco grandes animales del parque, así llamados por los cazadores desde hace años?"
  ).toLowerCase();
  switch (respuesta) {
    case "el león":
      alert("Respuesta correcta! :D");
      break;
    default:
      alert("Respuesta incorrecta! D:");
      break;
  }
};
const pregunta3 = () => {
  let respuesta = prompt(
    "¿Cada cuanto sale el trío de monstruos de río ( kappa )que sale del estanque?"
  ).toLowerCase();
  switch (respuesta) {
    case "15 minutos":
      alert("Respuesta correcta! :D");
      break;
    default:
      alert("Respuesta incorrecta! D:");
      break;
  }
};
const pregunta4 = () => {
  let respuesta = prompt(
    "¿Cuales son las proporciones del Parque Serengueti?"
  ).toLowerCase();
  switch (respuesta) {
    case "13.000 km":
      alert("Respuesta correcta! :D");
      break;
    default:
      alert("Respuesta incorrecta! D:");
      break;
  }
};
const pregunta5 = () => {
  let respuesta = prompt(
    "¿Donde se encuentra Su máxima altura?"
  ).toLowerCase();
  switch (respuesta) {
    case " Serranía de Los Órganos":
      alert("Respuesta correcta! :D");
      break;
    default:
      alert("Respuesta incorrecta! D:");
      break;
  }
};
const pregunta6 = () => {
  let respuesta = prompt(
    "¿Departamentos de su Maxima altura?"
  ).toLowerCase();
  switch (respuesta) {
    case "Cundinamarca y el Meta":
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