function validar() {
            var email = document.getElementById('email').value;
            var contrasena = document.getElementById('contrasena').value;

            // Validación del email utilizando una expresión regular
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un correo electronico valido.');
                return false;
            }

            // Validación de la contraseña (puedes agregar más criterios según tus necesidades)
            if (contrasena.length < 6) {
                alert('La contrasena debe tener al menos 6 caracteres.');
                return false;
            }
            alert('Logueo correcto');
            // El formulario se enviará solo si todas las validaciones pasan
            return true;
        }
