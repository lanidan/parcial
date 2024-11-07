
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault() // Evita el envío del formulario para validar primero
        
        const emailInput = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailPattern.test(emailInput.value)) {
            // Mostrar mensaje de error si el correo es inválido
            showModal("Por favor, ingrese un correo válido.");
        } else {
            // Mostrar mensaje de éxito y limpiar campos si el correo es válido
            showModal("¡Muchas gracias por comentar!");
            form.reset(); // Limpia los campos del formulario
        }
    });

    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = "flex"; // Muestra el modal
    }

    function closeModal() {
        modal.style.display = "none"; // Oculta el modal
    }

    // Cierra el modal cuando el usuario hace clic fuera de él
    window.onclick = function(event) { 
        if (event.target === modal) {
            closeModal()
        }
    }