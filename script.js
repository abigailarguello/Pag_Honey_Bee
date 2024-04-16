document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const chatContainer = document.getElementById("chat-container");
    const helpButton = document.getElementById("help-button"); // Agregamos esta línea para obtener el botón de ayuda
    const chatbotButton = document.createElement("button"); // Creamos el botón del chatbot
    chatbotButton.textContent = "Chatbot"; // Establecemos el texto del botón del chatbot
    chatContainer.insertBefore(chatbotButton, chatMessages.nextSibling); // Insertamos el botón del chatbot antes del contenedor de mensajes

    // Función para mostrar/ocultar el chatbot al hacer clic en el botón de ayuda
    helpButton.addEventListener("click", function () {
        chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
        userInputContainer.classList.remove("hidden"); // Asegurarse de que el contenedor de entrada de usuario también se muestre
    });

    // Función para mostrar/ocultar el contenedor de entrada de usuario al hacer clic en el botón del chatbot
    chatbotButton.addEventListener("click", function() {
        userInputContainer.classList.toggle("hidden");
        if (!userInputContainer.classList.contains("hidden")) {
            userInput.focus(); // Enfocar en el input de usuario cuando se muestra
        }
    });

    // Respuestas del chatbot
    const chatbotResponses = [
        "Hola, ¿puedo ayudarte en algo?",
        "Si buscas información sobre propiedades, puedes visitar nuestra página web.",
        "¡Claro! Estoy aquí para ayudarte."
    ];

    // Función para enviar mensajes del usuario
    function sendMessage() {
        const message = userInput.value;
        if (message.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message", "user-message");
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            userInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
            setTimeout(sendBotResponse, 1000); // Simular respuesta del bot después de 1 segundo
        }
    }

    // Función para enviar respuestas del chatbot
    function sendBotResponse() {
        const randomIndex = Math.floor(Math.random() * chatbotResponses.length);
        const botResponse = chatbotResponses[randomIndex];
        const responseElement = document.createElement("div");
        responseElement.classList.add("message", "bot-message");
        responseElement.textContent = botResponse;
        chatMessages.appendChild(responseElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Evento click para enviar mensaje del usuario
    sendButton.addEventListener("click", sendMessage);

    // Evento keypress para enviar mensaje del usuario al presionar Enter
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchResultsContainer = document.getElementById("search-results");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores del formulario de búsqueda
        const location = document.getElementById("location").value;
        const propertyType = document.getElementById("property-type").value;
        const maxPrice = document.getElementById("max-price").value;

        // Aquí enviarías los datos al backend para realizar la búsqueda
        // Supongamos que obtienes los resultados del backend en formato JSON
        const searchResults = [
            { id: 1, name: "Casa en el centro", type: "casa", price: 200000 },
            { id: 2, name: "Apartamento en la playa", type: "apartamento", price: 150000 },
            { id: 3, name: "Terreno en las afueras", type: "terreno", price: 50000 }
        ];

        // Mostrar los resultados en el contenedor de resultados
        displaySearchResults(searchResults);
    });

    // Función para mostrar los resultados de la búsqueda en el contenedor
    function displaySearchResults(results) {
        // Limpiar el contenido anterior del contenedor
        searchResultsContainer.innerHTML = "";

        // Mostrar cada resultado como un elemento en el contenedor
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.innerHTML = `<strong>${result.name}</strong> - Tipo: ${result.type}, Precio: $${result.price}`;
            searchResultsContainer.appendChild(resultElement);
        });
    }
         });
         