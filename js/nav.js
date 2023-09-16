// Obtén una referencia al elemento <div> donde deseas cargar el contenido
const contenidoDiv = document.getElementById("nav");

// Utiliza la función fetch para cargar el contenido de 'contenido.html'
fetch("nav.html")
    .then(response => response.text())
    .then(data => {
        // Inserta el contenido cargado en el elemento <div>
        contenidoDiv.innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el contenido:", error);
    });