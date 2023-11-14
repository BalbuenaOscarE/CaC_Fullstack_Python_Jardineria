
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");

const email = document.getElementById("mail");

const error = document.getElementById("errormail");
const errorNom = document.getElementById("errornom");
const errorApell = document.getElementById("errorapell");

//elementos donde se mostraran mensajes de error, de ser necesario

const emailRegExp =

  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// Expresión regular para validar direcciones de correo electrónico.
const textoForm = /^[a-zA-Z\u00C0-\u017F\s]+$/;
// Expresión regular para validar texto que incluye letras y caracteres especiales como tildes y diéresis.
const numForm = /^[0-9]+$/;
// Expresión regular para validar números.


window.addEventListener("load", () => {

/* Se agrega un evento "load" al objeto window. Cuando la página se carga, se ejecuta una función anónima que realiza la validación inicial de los campos de correo electrónico, nombre y apellido. Si los campos están vacíos o cumplen con las expresiones regulares, se les asigna la clase "valido"; de lo contrario, se les asigna la clase "invalido". */


  const isValid = email.value.trim() !== "" && emailRegExp.test(email.value);

  email.className = isValid ? "valido" : "invalido";

  

  

  

  /* El “operador condicional” nos permite ejecutar if else en una forma más corta y simple.

La Sintaxis es:

let result = condition ? value1 : value2; */

  const isValidNom = nombre.value.trim() !== "" && textoForm.test(nombre.value);

  nombre.className = isValidNom ? "valido" : "invalido";

  const isValidApell = apellido.value.trim() !== "" && textoForm.test(apellido.value);

  apellido.className = isValidApell ? "valido" : "invalido";

});

email.addEventListener("input", () => {

  /* Se agregan eventos "input" a los elementos email, nombre y apellido. Estos eventos se disparan cuando el usuario interactúa con los campos de entrada. */

  const isValid = email.value.trim() !== "" && emailRegExp.test(email.value);

  if (isValid) {
    email.className = "valido";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalido";
  }


   /* En las funciones de eventos "input" para email, nombre y apellido, se realiza una validación en tiempo real de los campos. Si el valor del campo cumple con las expresiones regulares, se le asigna la clase "valido". Si no cumple, se le asigna la clase "invalido". */

});

nombre.addEventListener("input", () => {

  const isValidNom = nombre.value.trim() !== "" && textoForm.test(nombre.value);

  if (isValidNom) {
    nombre.className = "valido";
    errorNom.textContent = "";
    errorNom.className = "error";
  } else {
    nombre.className = "invalido";
  }

});

apellido.addEventListener("input", () => {

  const isValidApell = apellido.value.trim() !== "" && textoForm.test(apellido.value);

  if (isValidApell) {
    apellido.className = "valido";
    errorApell.textContent = "";
    errorApell.className = "error";
  } else {
    apellido.className = "invalido";
  }

});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 

  /* Se agrega un evento "DOMContentLoaded" al objeto document. Cuando el documento HTML se haya cargado por completo, se agregará un controlador de eventos al formulario con ID "formulario" que escucha el evento "submit". Cuando se envía el formulario, se llama a la función validarFormulario. */

});

function validarFormulario(evento) {
  evento.preventDefault();

  /* La función validarFormulario toma un parámetro de evento y llama a evento.preventDefault() para evitar que el formulario se envíe automáticamente. */

  const isValid = email.value.trim() !== "" && emailRegExp.test(email.value);

  /* Se realiza la validación de los campos de correo electrónico, nombre y apellido en la función validarFormulario. Si alguno de los campos no cumple con las expresiones regulares, se asigna la clase "invalido" al campo respectivo y se muestra un mensaje de error en el elemento correspondiente. Si todos los campos son válidos, se envía el formulario utilizando this.submit(). */

  if (!isValid) {
    email.className = "invalido";
    error.textContent = "Ingrese un email correcto";
    error.className = "error activo";
    return;
  } else {
    email.className = "valido";
    error.textContent = "";
    error.className = "error";
  }

  const isValidNom = nombre.value.trim() !== "" && textoForm.test(nombre.value);
  if (!isValidNom) {
    nombre.className = "invalido";
    errorNom.textContent = "Ingrese un nombre correcto";
    errorNom.className = "error activo";
    return;
  } else {
    nombre.className = "valido";
    errorNom.textContent = "";
    errorNom.className = "error";
  }

  const isValidApell = apellido.value.trim() !== "" && textoForm.test(apellido.value);
  if (!isValidApell) {
    apellido.className = "invalido";
    errorApell.textContent = "Ingrese un apellido correcto";
    errorApell.className = "error activo";
    return;
  } else {
    apellido.className = "valido";
    errorApell.textContent = "";
    errorApell.className = "error";
  }

  this.submit();

  /* En resumen, este código asegura que los campos de correo electrónico, nombre y apellido se validan tanto en tiempo real mientras el usuario interactúa con ellos como cuando se envía el formulario. Los mensajes de error se muestran dinámicamente y se aplican estilos CSS para indicar si un campo es válido o no. */

};
