/**
 * Script con eventos para modificar texto del mensaje
 */

// let name, companyName, message;
const txtName = document.querySelector("#txtName"); 
const txtCompanyName = document.querySelector("#txtCompanyName");
const txtMensaje = document.querySelector("#txtMensaje");

addEventListener("load", function() {
    // datos de ejemplo al cargar el html
    txtName.value = "Juan"; 
    txtCompanyName.value = "Tech S.A.";
    setMessage();
});

txtName.addEventListener("change", setMessage);
txtName.addEventListener("keydown", setMessage);
txtName.addEventListener("keyup", setMessage);

txtCompanyName.addEventListener("change", setMessage);
txtCompanyName.addEventListener("keydown", setMessage);
txtCompanyName.addEventListener("keyup", setMessage);

function setMessage() {

    const text = [
        "¡Hola! \n",
        "Mi nombre es " + txtName.value + "\n",
        "Te contacto de la empresa " + txtCompanyName.value + "\n",
        "Me comunico contigo para solicitarte una copia de tu Curriculum en PDF. \n",
        "Saludos!"
    ];

    txtMensaje.value = "";
    txtMensaje.value += text[0]
    if (txtName.value.length !== 0) txtMensaje.value += text[1];
    if (txtCompanyName.value.length !== 0) txtMensaje.value += text[2];
    txtMensaje.value += text[3];
    txtMensaje.value += text[4];

}

// const formSendMail = document.getElementById("formSendMail");

// formSendMail.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     if (document.querySelector("#txtMail").value.length === 0) {
//         alert("Debe indicar su correo");
//     } else {
//         formSendMail.action = "https://formspree.io/f/xvovwyvr"; // no :)
//     }

// });

