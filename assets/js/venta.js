const propiedadesVenta = [
    {
      nombre: "Casa del sol",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Casa recién remodelada, 3 habitaciones, piscina.",
      ubicacion: "Buenos Aires",
      habitaciones: 4,
      costo: 10000,
      smokers: false,
      pets: true,
    },
    {
      nombre: "Ático de lujo",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Ático con vistas panorámicas y acabados modernos.",
      ubicacion: "Barcelona",
      habitaciones: 3,
      costo: 8000,
      smokers: false,
      pets: false,
    },
    {
      nombre: "Chalet en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      descripcion: "Chalet con amplios espacios y excelente ubicación.",
      ubicacion: "San Martín",
      habitaciones: 5,
      costo: 15000,
      smokers: true,
      pets: true,
    },
    {
      nombre: "Dúplex moderno",
      src: "img/duplex-moderno.jpg",
      descripcion: "Dúplex de 2 niveles con terraza privada.",
      ubicacion: "Madrid",
      habitaciones: 3,
      costo: 9000,
      smokers: false,
      pets: false,
    },
  ];



  const container = document.getElementById("propiedades-container");

propiedadesVenta.forEach((propiedad) => {
  const template = `
    <div class="col-md-4 mb-4"> <!-- Columna para la tarjeta -->
      <div class="card h-100"> <!-- Tarjeta con altura completa -->
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
        <div class="card-body d-flex flex-column">
          <h3 class="card-title">${propiedad.nombre}</h3>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
          <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
          <p><strong>Costo:</strong> $${propiedad.costo}</p>
          <p class="${propiedad.smokers ? "text-success" : "text-danger"}">
            ${propiedad.smokers ? "Se permite fumar" : "No se permite fumar"}
          </p>
          <p class="${propiedad.pets ? "text-success" : "text-danger"}">
            ${propiedad.pets ? "Se permiten mascotas" : "No se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>
  `;
  container.innerHTML += template;
});