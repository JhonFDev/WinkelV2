
export const featuredServices = {
  id: 1,
  title: "Servicios",
  description: "Servicios de personas con talento",
  serviceandproduct: [
    {
      id: 1,
      name: "Servicios publicos y otros",
      titlename: "Servicios",
      image: require("../../assets/serviciosconnombre.png"),
      stars: 4,
      // star: ,
      // description: "Servicios de personas con talento",
      // reviews: "4.4k",
      // category: "Services",
      itemsap: [
        {
          id: 1,
          name: "Jardinería y poda de árboles",
          image: require("../../assets/podarbol1.jpg"),
          // description:"Esta actividad consiste en el corte de ramas de los árboles, ubicado en áreas públicas sin restricciones de acceso, mediante el uso de equipos manuales o mecánicos. Se incluye la recolección y transporte del material obtenido hasta las estaciones de clasificación y aprovechamiento o disposición final.",
            knowandcontact: "Conoce y aparta una cita con nuestros expertos",
            talents: [
              
            {
              id: 1,
              name: "Pepito Perez",
              photo: require("../../assets/VAN.png"),
              reviews: "4.4k Reviews",
              stars: 4,
              experience: "3 años trabajando como jardinero",
              status: "Disponible",
            },
            {
              id: 2,
              name: "Fulanito janus",
              photo: require("../../assets/VAN.png"),
              reviews: "3.4k Reviews",
              stars: 3,
              experience: "1 año en realce, aclareo y formacion de los arboles y jardines",
              status: "Disponible",
            },
            {
              id: 3,
              name: "Rocky Max",
              photo: require("../../assets/VAN.png"),
              reviews: "3.9k Reviews",
              stars: 4,
              experience: "2 años como podador de arboles y talar",
              status: "Disponible",
            },
          ],
        },
        
        {
          id: 2,
          name: "Transporte Urbano",
          image: require("../../assets/city-transport.png"),
          knowandcontact: "Contacta con nuestros taxis y mototaxis",          
          talents: [
          {
            id: 1,
            name: "Ramiro pino",
            photo: require("../../assets/VAN.png"),
            reviews: "4.4k Reviews",
            stars: 4,
            experience: "3 años trabajando como jardinero",
            status: "Disponible",
          },
          {
            id: 2,
            name: "claudia leal",
            photo: require("../../assets/VAN.png"),
            reviews: "3.4k Reviews",
            stars: 3,
            experience: "1 año en realce, aclareo y formacion de los arboles y jardines",
            status: "Disponible",
          },
          {
            id: 3,
            name: "wilson varela",
            photo: require("../../assets/VAN.png"),
            reviews: "3.9k Reviews",
            stars: 4,
            experience: "2 años como podador de arboles y talar",
            status: "Disponible",
          },
        ],
        },

        {
          id: 3,
          name: "pagar recibo del agua",
          image: require("../../assets/facturaAgua.png"),
          knowandcontact: "Elige como quieres pagar tu recibo",
          talents: [
            {
              id: 1,
              name: "Efecty",
              photo: require("../../assets/VAN.png"),
              status: "Disponible",
            },
            {
              id: 2,
              name: "supergiros",
              photo: require("../../assets/VAN.png"),
              status: "Disponible",
            },
            {
              id: 3,
              name: "Bancolombia",
              photo: require("../../assets/VAN.png"),
              status: "Disponible",
            },
          ],          
        },
      ],
    },
  ],
};

export const featuredProducts = {
  id: 2,
  title: "Productos",
  description: "Productos locales y nacionales",
  serviceandproduct: [
    {
      id: 1,
      name: "Productos canasta familiar",
      titlename: "Productos",
      image: require("../../assets/productos-agricolas.png"),
      description: "Productos locales y nacionales",
      knowandcontact: "Conoce y aparta una cita con nuestros expertos",

      itemsap: [
        {
          id: 1,
          name: "Aguacates",
          image: require("../../assets/aguacates.jpeg"),
          description: "",
        },
        {
          id: 2,
          name: "Bananos",
          image: require("../../assets/Bananos.jpg"),
          description: "",
        },
        {
          id: 3,
          name: "Coco",
          image: require("../../assets/coco.jpg"),
          description: "",
        },
      ],
    },
  ],
};
