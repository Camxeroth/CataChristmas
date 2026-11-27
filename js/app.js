const WA_NUMBER = "593996328009";
const EMAIL = "marleniu29diemar@hotmail.com";

const categories = ["Todos", "Velas", "Decoración", "Chocolates", "Tazas", "Personalizados"];

const products = [
  {
    id: "arboles-pareja",
    name: "Árboles Navideños Decorativos (Verde y Rojo)",
    category: "Decoración",
    image: "assets/img/arboles-pareja.jpg",
    price: "$2.50 c/u",
    specs: "Altura: 10 cm",
    description: "Árbol navideño decorativo de 10 cm con adornos florales blancos, cinta dorada en espiral y base estable. Disponible en verde y rojo, envuelto en celofán con lazo."
  },
  {
    id: "jengibre",
    name: "Hombre de Jengibre Navideño",
    category: "Decoración",
    image: "assets/img/jengibre.jpg",
    price: "$2.50",
    specs: "Altura: 8 cm",
    description: "Figura de galleta de jengibre decorada con glaseado blanco, lazo rojo con joya y botones negros. Ideal para decorar o regalar."
  },
  {
    id: "arbol-estrella",
    name: "Árbol Navideño con Estrella",
    category: "Decoración",
    image: "assets/img/arbol-estrella.jpg",
    price: "$2.50",
    specs: "Altura: 9 cm",
    description: "Árbol verde de 9 cm con estrella dorada, capas de glaseado blanco y bolitas de colores. Envuelto en celofán con lazo rojo."
  },
  {
    id: "angel-amor",
    name: "Ángel 'Amor' en Caja",
    category: "Decoración",
    image: "assets/img/angeles.jpg",
    price: "$3.00",
    specs: "Altura: 7.5 cm",
    description: "Ángel rojo con corazón calado y arco dorado, relleno decorativo, presentado en caja acrílica con lazo dorado."
  },
  {
    id: "angel-salud",
    name: "Ángel 'Salud'",
    category: "Decoración",
    image: "assets/img/angeles.jpg",
    price: "$2.50",
    specs: "Altura: 7.5 cm",
    description: "Ángel blanco/crema con inscripción 'Salud', corazón calado y relleno decorativo, en bolsa de celofán con lazo rojo."
  },
  {
    id: "copo-verde",
    name: "Copo de Nieve Verde",
    category: "Decoración",
    image: "assets/img/copos.jpg",
    price: "$2.50",
    specs: "Diámetro: 7 cm",
    description: "Copo de nieve verde con destellos azul/plata y puntos amarillos, en empaque colgante."
  },
  {
    id: "copo-rojo",
    name: "Copo de Nieve Rojo",
    category: "Decoración",
    image: "assets/img/copos.jpg",
    price: "$2.50",
    specs: "Diámetro: 7 cm",
    description: "Copo de nieve rojo con glitter, envuelto en bolsa de celofán. Ideal para el árbol."
  },
  {
    id: "copo-blanco",
    name: "Copo de Nieve Blanco (Vela)",
    category: "Velas",
    image: "assets/img/copos.jpg",
    price: "$3.00",
    specs: "Diámetro: 7 cm",
    description: "Vela copo de nieve blanca presentada en caja con lazo rojo. Aroma suave y luz cálida."
  },
  {
    id: "reno-vela",
    name: "Vela Reno Navideño",
    category: "Velas",
    image: "assets/img/reno-vela.jpg",
    price: "$4.50 c/u",
    specs: "Altura: 9 cm · Ancho: 4.5 cm",
    description: "Vela con forma de reno (Rudolph) con nariz roja, lazo rojo y cascabel dorado. Presentación en celofán."
  },
  {
    id: "set-regalo",
    name: "Set Regalo Feliz Navidad (Reno + Árbol)",
    category: "Velas",
    image: "assets/img/set-regalo.jpg",
    price: "$10.00 c/caja",
    specs: "10 x 10 cm",
    description: "Caja acrílica con reno blanco y árbol verde, relleno rojo, lazo rojo y mensaje 'Feliz Navidad'. El árbol incluye vela encendible."
  },
  {
    id: "caja-chocolates",
    name: "Caja de Chocolates Navideños",
    category: "Chocolates",
    image: "assets/img/caja-chocolates.jpg",
    price: "$10.00 c/caja",
    specs: "Caja cuadrada",
    description: "Caja roja con relieve de copos de nieve que contiene surtido de chocolates dorados en formas navideñas (estrellas, Santa, muñeco de nieve, casas, reno, campanas)."
  },
  {
    id: "vela-reno-votiva",
    name: "Vela Votiva Reno",
    category: "Velas",
    image: "assets/img/velas-votivas.jpg",
    price: "$3.00 c/uno",
    specs: "Altura: 5 cm · Circunferencia: 5 cm",
    description: "Vela votiva en vaso de vidrio con diseño de reno (cornamenta dorada, lazo rojo, nariz roja) y topper rosa. Vela encendida para ambiente cálido."
  },
  {
    id: "vela-muneco",
    name: "Vela Votiva Muñeco de Nieve",
    category: "Velas",
    image: "assets/img/velas-votivas.jpg",
    price: "$3.00 c/uno",
    specs: "Altura: 5 cm · Circunferencia: 5 cm",
    description: "Vela votiva en vaso de vidrio con muñeco de nieve sosteniendo un arbolito; inscripción 'Feliz Navidad'."
  },
  {
    id: "esferas-personalizadas",
    name: "Esferas Personalizadas (Nombres)",
    category: "Personalizados",
    image: "assets/img/esferas-personalizadas.jpg",
    price: "Desde $4.50 c/u",
    specs: "Personalizable",
    description: "Esferas de vidrio personalizadas con nombre en cursiva, lazo blanco y caja de regalo. Disponible en verde, rojo y plata. Solicita tus nombres por WhatsApp."
  },
  {
    id: "velas-bundle",
    name: "Velas Bundle 'Abundancia'",
    category: "Velas",
    image: "assets/img/velas-bundle.jpg",
    price: "$6.00 el par",
    specs: "Largo: 14 cm · Ancho: 2 cm",
    description: "Par de velas blancas en celofán con palabras inspiradoras (Fe, Paz, Amor, Unión, Familia, Gratitud, Esperanza, Prosperidad) y 'Abundancia' con motivos de trigo."
  },
  {
    id: "taza-galleta",
    name: "Taza Navideña con Galleta de Jengibre",
    category: "Tazas",
    image: "assets/img/taza-galleta.jpg",
    price: "$8.50",
    specs: "Incluye galleta",
    description: "Taza roja de cerámica con mensaje 'Feliz Navidad' y motivos navideños, acompañada de galleta de jengibre envuelta en celofán."
  },
  {
    id: "tazas-coleccion",
    name: "Tazas Navideñas Colección",
    category: "Tazas",
    image: "assets/img/tazas-coleccion.jpg",
    price: "$6.00 c/u",
    specs: "8 diseños",
    description: "Tazas blancas de cerámica con diseños navideños variados (renos, gnomos, Santa, paisajes invernales). Elige tu diseño favorito."
  },
  {
    id: "esferas-rojas",
    name: "Esferas Personalizadas Rojas (Mascotas y Nombres)",
    category: "Personalizados",
    image: "assets/img/esferas-rojas.jpg",
    price: "$4.50 c/u",
    specs: "Set de 6",
    description: "Set de 6 esferas rojas personalizadas con nombres y huellas/copos de nieve, en caja roja con lazo blanco. Ideal para mascotas y familia."
  }
];

function waLink(product) {
  const text = `Hola Chocokraff! Me interesa el producto "${product.name}" (${product.price}). ¿Está disponible? Me gustaría más información.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function generalWaLink() {
  const text = "Hola Chocokraff! Quisiera información sobre el catálogo navideño y los métodos de pago.";
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

let activeCategory = "Todos";
let searchTerm = "";

function openModal(product) {
  if (!product) return;
  const modal = document.getElementById("productModal");
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.name;
  document.getElementById("modalCat").textContent = product.category;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = "Precio: " + product.price;
  document.getElementById("modalDesc").textContent = product.description;
  const specs = document.getElementById("modalSpecs");
  if (product.specs) {
    specs.textContent = product.specs;
    specs.style.display = "block";
  } else {
    specs.style.display = "none";
  }
  document.getElementById("modalWa").href = waLink(product);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const filtered = products.filter(p => {
    const catOk = activeCategory === "Todos" || p.category === activeCategory;
    const searchOk = !searchTerm || (p.name + " " + p.description + " " + p.category).toLowerCase().includes(searchTerm.toLowerCase());
    return catOk && searchOk;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty">No encontramos productos con ese filtro. Prueba otra categoría o término.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="card" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalles de ${p.name}">
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="price-tag">${p.price}</span>
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <p class="card-hint">Toca para ver detalles</p>
        <div class="card-actions">
          <a class="btn-card-wa" href="${waLink(p)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".card").forEach(card => {
    const product = products.find(p => p.id === card.dataset.id);
    const open = () => openModal(product);
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-card-wa")) return;
      open();
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
}

function renderFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = categories.map(c => `
    <button class="filter-btn ${c === activeCategory ? 'active' : ''}" data-cat="${c}">${c}</button>
  `).join("");
  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderProducts();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProducts();

  const search = document.getElementById("search");
  search.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderProducts();
  });

  const generalBtn = document.getElementById("generalWa");
  if (generalBtn) generalBtn.href = generalWaLink();

  const heroWa = document.getElementById("heroWa");
  if (heroWa) heroWa.href = generalWaLink();

  const modalClose = document.getElementById("modalClose");
  if (modalClose) modalClose.addEventListener("click", closeModal);
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
