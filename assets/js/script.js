const propiedadesVentaLimitadas = propiedadesVenta.slice(0, 3);
const propiedadesAlquilerLimitadas = propiedadesAlquiler.slice(0, 3);

const renderizarPropiedades = (arreglo, containerId) => {
  const container = document.getElementById(containerId);
  arreglo.forEach((propiedad) => {
    const template = `
      <div class="card">
        <img src="${propiedad.src}" alt="${propiedad.nombre}" />
        <div class="card-body">
          <h3>${propiedad.nombre}</h3>
          <p>${propiedad.descripcion}</p>
          <p><strong>Costo:</strong> $${propiedad.costo}</p>
        </div>
      </div>
    `;
    container.innerHTML += template;
  });
};

renderizarPropiedades(propiedadesVentaLimitadas, "venta-container");
renderizarPropiedades(propiedadesAlquilerLimitadas, "alquiler-container");