    // Obtiene el valor del correo electrónico ingresado
    const form = document.getElementById("forms")
function validate() {
    const emailPattern = /^[^\s@]+@[^\s@]\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true; // Permite enviar el formulario si la validación es exitosa
}

