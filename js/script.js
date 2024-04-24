function validarFormulario() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar email
    if (!isValidEmail(email)) {
      alert('Por favor, ingrese un email válido.');
      return false;
    }

    // Validar contraseña
    if (!isValidPassword(password)) {
      alert('La contraseña debe contener al menos 8 caracteres y una letra mayúscula.');
      return false;
    }

    // Si todas las validaciones pasan, permitir el envío del formulario
    return true;
  }

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function isValidPassword(password) {
    var passwordPattern = /^(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
  }
