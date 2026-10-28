// Base de datos simulada de las tiendas
const baseDeDatosTiendas = {
    "telas-la-elegancia": {
        nombre: "Telas La Elegancia",
        imagenPrincipal: "img/tienda1.jpg",
        galeria: [
            "img/tienda1-interior.jpg",
            "img/tienda1-telas.jpg"
        ],
        rubro: "Sedas, Lino y Telas de Fiesta",
        direccion: "Av. Independencia #1234, Santiago",
        mapaQuery: "Av.+Independencia+1234,+Santiago",
        descripcion: "Tienda con más de 20 años en el Barrio de las Telas. Especialistas en alta costura, novias, sedas importadas y atención personalizada a diseñadores y modistas.",
        whatsapp: "https://wa.me/56912345678",
        correo: "mailto:contacto@laselegancia.cl",
        instagram: "https://instagram.com",
        tiktok: "https://tiktok.com",
        facebook: "https://facebook.com"
    },
    "el-rey-del-algodon": {
        nombre: "El Rey del Algodón",
        imagenPrincipal: "img/tienda2.jpg",
        galeria: [
            "img/tienda2-interior.jpg",
            "img/tienda2-rollo.jpg"
        ],
        rubro: "Algodón, Mezclilla y Telas de Tapicería",
        direccion: "Av. Independencia #1560, Santiago",
        mapaQuery: "Av.+Independencia+1560,+Santiago",
        descripcion: "El lugar perfecto para encontrar gran variedad de telas para hogar, sábanas por mayor, algodón 100% orgánico y lonas resistentes para decoración.",
        whatsapp: "https://wa.me/56987654321",
        correo: "mailto:ventas@elreydelalgodon.cl",
        instagram: "https://instagram.com",
        tiktok: "https://tiktok.com",
        facebook: "https://facebook.com"
    }
};

// Capturamos el parámetro que viene en la URL (ej: ?tienda=telas-la-elegancia)
const parametrosURL = new URLSearchParams(window.location.search);
const idTienda = parametrosURL.get('tienda');

// Buscamos la tienda en nuestra base de datos
const tiendaActual = baseDeDatosTiendas[idTienda];

if (tiendaActual) {
    // 1. Datos principales
    document.getElementById('det-nombre').textContent = tiendaActual.nombre;
    document.getElementById('det-imagen').src = tiendaActual.imagenPrincipal;
    document.getElementById('det-rubro').querySelector('span').textContent = tiendaActual.rubro;
    document.getElementById('det-direccion').querySelector('span').textContent = tiendaActual.direccion;
    document.getElementById('det-descripcion').querySelector('span').textContent = tiendaActual.descripcion;

    // 2. Redes sociales
    document.getElementById('det-whatsapp').href = tiendaActual.whatsapp;
    document.getElementById('det-correo').href = tiendaActual.correo;
    document.getElementById('det-instagram').href = tiendaActual.instagram;
    document.getElementById('det-tiktok').href = tiendaActual.tiktok;
    document.getElementById('det-facebook').href = tiendaActual.facebook;

    // 3. Galería de fotos (con verificación de seguridad)
    const contenedorGaleria = document.getElementById('det-galeria-fotos');
    if (contenedorGaleria) {
        contenedorGaleria.innerHTML = ""; 
        if (tiendaActual.galeria && Array.isArray(tiendaActual.galeria)) {
            tiendaActual.galeria.forEach(fotoRuta => {
                const img = document.createElement('img');
                img.src = fotoRuta;
                img.alt = `Foto de ${tiendaActual.nombre}`;
                contenedorGaleria.appendChild(img);
            });
        }
    }

    // 4. Actualizar título y mapa con la dirección de la tienda seleccionada
    const tituloMapa = document.getElementById('titulo-mapa');
    if (tituloMapa) {
        tituloMapa.textContent = `¿Cómo llegar? ${tiendaActual.direccion}`;
    }
    
    const mapaIframe = document.getElementById('det-mapa-iframe');
    if (mapaIframe) {
        mapaIframe.src = `https://maps.google.com/maps?q=${tiendaActual.mapaQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }
} else {
    // Si la tienda no existe en la URL
    document.querySelector('.contenedor-detalle').innerHTML = "<h2>Lo sentimos, la tienda no fue encontrada.</h2><a href='index.html'>Volver al inicio</a>";
}