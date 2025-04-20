const propiedadesAlquiler = [
    {
      nombre: "Casa en la playa",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      descripcion: "Casa de 3 habitaciones, 2 baños, cocina equipada y piscina.",
      ubicacion: "Playa del Carmen",
      habitaciones: 3,
      costo: 1500,
      smokers: false,
      pets: true,
    },
    {
        nombre: "Casa en la playa",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Casa de 3 habitaciones, 2 baños, cocina equipada y piscina.",
        ubicacion: "Playa del Carmen",
        habitaciones: 3,
        costo: 1500,
        smokers: false,
        pets: true,
      },
    {
      nombre: "Departamento céntrico",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion: "Departamento moderno en el corazón de la ciudad.",
      ubicacion: "Ciudad de México",
      habitaciones: 2,
      costo: 1000,
      smokers: false,
      pets: false,
    },
    {
      nombre: "Cabaña en el bosque",
      src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      descripcion: "Cabaña acogedora con vistas espectaculares.",
      ubicacion: "Bariloche",
      habitaciones: 3,
      costo: 1200,
      smokers: true,
      pets: true,
    },
    {
      nombre: "Loft moderno",
      src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      descripcion: "Loft con diseño minimalista y terraza privada.",
      ubicacion: "Buenos Aires",
      habitaciones: 1,
      costo: 800,
      smokers: false,
      pets: true,
    },
  ];


  const container = document.getElementById("propiedades-container");

  propiedadesAlquiler.forEach((propiedad) => {
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