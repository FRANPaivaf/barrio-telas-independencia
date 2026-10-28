const botonesDetalle = document.querySelectorAll('.btn-ver-mas');
const modal = document.getElementById('modal-detalle');
const botonCerrar = document.getElementById('cerrar-modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalRubro = document.getElementById('modal-rubro');
const modalDireccion = document.getElementById('modal-direccion');

// Abrir el modal al hacer clic en "Ver detalles"
botonesDetalle.forEach(boton => {
    boton.addEventListener('click', (evento) => {
        const tarjeta = evento.target.closest('.tarjeta-tienda');
        
        // Extraer la información de la tarjeta seleccionada
        const nombre = tarjeta.querySelector('h3').textContent;
        const rubro = tarjeta.querySelector('.rubro').textContent;
        const direccion = tarjeta.querySelector('.direccion').textContent;
        
        // Rellenar el modal con esos datos
        modalTitulo.textContent = nombre;
        modalRubro.textContent = rubro;
        modalDireccion.textContent = direccion;
        
        // Mostrar el modal quitando la clase "oculto"
        modal.classList.remove('oculto');
    });
});

// Cerrar el modal al hacer clic en la "X"
botonCerrar.addEventListener('click', () => {
    modal.classList.add('oculto');
});

// Cerrar el modal si hacen clic fuera de la caja blanca
window.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.classList.add('oculto');
    }
});