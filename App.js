/**
 * Script con eventos para modificar texto del mensaje
 */

let name, companyName, message;
let txtName = document.getElementById("txtName"); 
let txtCompanyName = document.getElementById("txtCompanyName");
let txtMensaje = document.getElementById("txtMensaje");

addEventListener("load", function() {
    txtName.value = "Juan";
    txtCompanyName.value = "EmpresaX";
    txtMensaje.value = "Hola, mi nombre es " + txtName.value + ", te contacto de la empresa "
        + txtCompanyName.value + " para solicitarte una copia de tu correo electrónico. \n"
        + "Saludos.";
});

txtName.addEventListener("change", setMessage);
txtName.addEventListener("keydown", setMessage);
txtName.addEventListener("keyup", setMessage);

txtCompanyName.addEventListener("change", setMessage);

function setMessage() {

    if (txtName.value.length === 0) alert("nulo");

    txtMensaje.value = "Hola, mi nombre es " + txtName.value + ", te contacto de la empresa "
        + txtCompanyName.value + " para solicitarte una copia de tu correo electrónico. \n"
        + "Saludos.";
}

txtMensaje.addEventListener("click", function(event) {
    
});


/**
 * Hola, mi nombre es (nombre), te contacto de la empresa (empresa)
 * para solicitarte una copia de tu correo electrónico. \n
 * Saludos.
 */

