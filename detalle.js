const params = new URLSearchParams(window.location.search)

const id = Number(params.get("id"))

const producto = productos.find(p => p.id === id)
const contenedor = document.getElementById("detalle")


if(producto && contenedor){
    const mensaje = encodeURIComponent (
        `Hola! Quiero comprar el producto: ${producto.nombre}`
    )

contenedor.innerHTML =
    `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h1>${producto.nombre}</h1>
    <p class="precio">$${producto.precio}</p>
    <a 
      href="https://wa.me/${telefono}?text=${mensaje}" 
      target="_blank" 
      class="btn-whatsapp">
      Comprar por WhatsApp
    </a>
  `
} 

const relacionadosContainer = document.getElementById("productos-relacionados")

if (producto && relacionadosContainer) {
  const relacionados = productos
    .filter(p => p.id !== producto.id)
    .slice(0, 4)

  relacionados.forEach(item => {
    const mensaje = encodeURIComponent(
      `Hola! Quiero comprar el producto: ${item.nombre}`
    )

    const card = document.createElement("article")
    card.classList.add("producto")

    card.innerHTML = `
      <a href="detalle.html?id=${item.id}" class="producto-link">
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
      </a>
      <p class="precio">$${item.precio}</p>
      <a 
        href="https://wa.me/${telefono}?text=${mensaje}" 
        target="_blank"
        class="btn-whatsapp">
        Comprar
      </a>
    `

    relacionadosContainer.appendChild(card)
  })
}
