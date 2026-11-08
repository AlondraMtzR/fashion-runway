// Funciones principales de Fashion Runway
// ==========================================
// FASHION RUNWAY - FUNCIONES PRINCIPALES
// ==========================================


// 1. CATÁLOGO DE PRENDAS

const prendas = [
    {
        nombre: "Vestido Elegance",
        precio: 1200,
        descripcion: "Vestido de colección elegante."
    },
    {
        nombre: "Conjunto Runway",
        precio: 950,
        descripcion: "Diseño exclusivo de pasarela."
    },
    {
        nombre: "Look Urban Fashion",
        precio: 850,
        descripcion: "Estilo moderno y urbano."
    }
];


// 2. MOSTRAR PRENDAS

const catalogo = document.getElementById("catalogo");

function mostrarPrendas() {

    if (!catalogo) return;

    catalogo.innerHTML = "";

    prendas.forEach((prenda, indice) => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta-prenda");

        tarjeta.innerHTML = `
            <div class="imagen-prenda">
                <span>FASHION RUNWAY</span>
            </div>

            <h3>${prenda.nombre}</h3>

            <p>${prenda.descripcion}</p>

            <strong>$${prenda.precio} MXN</strong>

            <button onclick="reservarPrenda(${indice})">
                Comprar / Reservar
            </button>
        `;

        catalogo.appendChild(tarjeta);
    });
}


// 3. RESERVAR PRENDAS

function reservarPrenda(indice) {

    const prenda = prendas[indice];

    alert(
        "Has seleccionado: " + prenda.nombre +
        "\nPrecio: $" + prenda.precio + " MXN" +
        "\nPróximamente podrás completar tu solicitud."
    );
}


// 4. FORMULARIO DE INVITACIONES

const formulario = document.getElementById(
    "formulario-invitacion"
);

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        const correo = document.getElementById("correo").value.trim();

        if (!nombre || !correo) {
            alert("Completa todos los campos.");
            return;
        }

        // Generar folio único
        const folio = "FR-" + Date.now();

        // Crear información de la invitación
        const invitacion = {
            nombre: nombre,
            correo: correo,
            folio: folio
        };

        // Guardar solicitud en el navegador
        const solicitudes = JSON.parse(
            localStorage.getItem("invitaciones") || "[]"
        );

        solicitudes.push(invitacion);

        localStorage.setItem(
            "invitaciones",
            JSON.stringify(solicitudes)
        );

        // Mostrar resultado
        const resultado = document.getElementById(
            "resultado-invitacion"
        );

        resultado.innerHTML = `
            <h3>¡Solicitud registrada!</h3>
            <p>Nombre: ${nombre}</p>
            <p>Folio: ${folio}</p>
            <div id="codigo-qr"></div>
        `;

        // Generar código QR
        const qr = document.getElementById("codigo-qr");

        if (window.QRCode) {
            new QRCode(qr, {
                text: folio,
                width: 160,
                height: 160
            });
        } else {
            qr.textContent = "Folio: " + folio;
        }

        formulario.reset();

    });
}


// 5. INICIAR CATÁLOGO

mostrarPrendas();
