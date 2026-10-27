// Seleccionamos todos los botones de las tarjetas
const botonesDetalle = document.querySelectorAll('.btn-ver-mas');

// Recorremos cada botón para escuchar el evento "click"
botonesDetalle.forEach(boton => {
    boton.addEventListener('click', (evento) => {
        // Buscamos la tarjeta padre del botón presionado
        const tarjeta = evento.target.closest('.tarjeta-tienda');
        
        // Extraemos el nombre de la tienda dentro de esa tarjeta
        const nombreTienda = tarjeta.querySelector('h3').textContent;
        
        // Mostramos una alerta interactiva (luego la cambiaremos por una ventana más estilizada)
        alert(`¡Pronto podrás ver toda la información detallada, horarios y el mapa de: ${nombreTienda}!`);
    });
});