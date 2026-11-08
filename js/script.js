// ==========================================
// FASHION RUNWAY
// Funciones principales de la página
// ==========================================


// 1. CATÁLOGO DE PRENDAS

const prendas = [
    {
        id: 1,
        nombre: "Vestido Elegance",
        descripcion: "Vestido elegante de colección.",
        precio: 2500,
        imagen: "IMG/prendas/vestido.jpg"
    },
    {
        id: 2,
        nombre: "Conjunto Runway",
        descripcion: "Conjunto moderno de pasarela.",
        precio: 3200,
        imagen: "IMG/prendas/conjunto.jpg"
    },
    {
        id: 3,
        nombre: "Look Urban",
        descripcion: "Estilo urbano y contemporáneo.",
        precio: 1800,
        imagen: "IMG/prendas/urban.jpg"
    },
    {
        id: 4,
        nombre: "Fashion Classic",
        descripcion: "Diseño clásico de alta moda.",
        precio: 2900,
        imagen: "IMG/prendas/classic.jpg"
    }
];


// 2. MOSTRAR PRENDAS EN EL CATÁLOGO

function mostrarPrendas() {

    const contenedor = document.getElementById("productos-grid");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    prendas.forEach(prenda => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "producto-card";

        tarjeta.innerHTML = `
            <img src="${prenda.imagen}"
                 alt="${prenda.nombre}"
                 onerror="this.style.display='none'">

            <h3>${prenda.nombre}</h3>

            <p>${prenda.descripcion}</p>

            <p class="precio">
                $${prenda.precio.toLocaleString("es-MX")} MXN
            </p>

            <button onclick="reservarPrenda(${prenda.id})">
                Reservar
            </button>
        `;

        contenedor.appendChild(tarjeta);

    });

}


// 3. FUNCIÓN PARA RESERVAR PRENDAS

function reservarPrenda(id) {

    const prenda = prendas.find(item => item.id === id);

    if (!prenda) return;

    alert(
        "Has seleccionado: " + prenda.nombre +
        "\nPrecio: $" + prenda.precio + " MXN" +
        "\n\nLa reserva se realizará próximamente."
    );

}


// 4. REGISTRO DE INVITACIONES

const formulario = document.getElementById("formulario-invitacion");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        const correo = document.getElementById("correo").value.trim();

        const resultado = document.getElementById("resultado-invitacion");

        if (!nombre || !correo) {

            alert("Por favor, completa todos los campos.");

            return;

        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {

            alert("Ingresa un correo electrónico válido.");

            return;

        }

        // Generar folio único

        const folio = "FR-" + Date.now().toString().slice(-8);

        // Crear información del invitado

        const invitacion = {
            nombre: nombre,
            correo: correo,
            folio: folio
        };

        // Mostrar invitación

        resultado.innerHTML = `
            <h3>¡Invitación registrada!</h3>

            <p>Nombre: ${invitacion.nombre}</p>

            <p>Correo: ${invitacion.correo}</p>

            <p>Folio: ${invitacion.folio}</p>

            <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(folio)}"
                alt="Código QR de invitación"
            >

            <p>Presenta este código QR en el evento.</p>
        `;

        formulario.reset();

    });

}


// 5. INICIALIZAR LA PÁGINA

document.addEventListener("DOMContentLoaded", function() {

    mostrarPrendas();

    console.log("Fashion Runway está funcionando correctamente.");

});
