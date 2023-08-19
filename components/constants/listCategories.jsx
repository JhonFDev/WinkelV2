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
      description: "Servicios de personas con talento",
      reviews: "4.4k",
      category: "Services",
      itemsap: [
        {
          id: 1,
          name: "Jardinería y poda de árboles",
          image: require("../../assets/podarbol1.jpg"),
          description:
            "Esta actividad consiste en el corte de ramas de los árboles, ubicado en áreas públicas sin restricciones de acceso, mediante el uso de equipos manuales o mecánicos. Se incluye la recolección y transporte del material obtenido hasta las estaciones de clasificación y aprovechamiento o disposición final.",
          knowandcontact: "Conoce y aparta una cita con nuestros expertos",
          talents: [
            {
              id: 1,
              name: "Pepito Perez",
              photo: require("../../assets/VAN.png"),
              reviews: "4.4k",
              stars: 4,
              experience: "3 años trabajando como jardinero",
              status: "Disponible",
            },
            {
              id: 2,
              name: "Fulanito janus",
              photo: require("../../assets/VAN.png"),
              reviews: "3.4k",
              stars: 3,
              experience:
                "1 año en realce, aclareo y formacion de los arboles y jardines",
              status: "Disponible",
            },
            {
              id: 3,
              name: "Rocky Florez",
              photo: require("../../assets/VAN.png"),
              reviews: "3.9k",
              stars: 4,
              experience: "2 años como podador de arboles y talar",
              status: "Disponible",
            },
          ],
        },

        {
          id: 2,
          name: "cortar cesped",
          image: require("../../assets/podarbol1.jpg"),

          ingredients: [
            {
              ingredient01:
                "3 Gajos de cebolla larga. 1 ramo de cilantro. 2 pollos medianos despresados (4-5 libras). 18 tazas de agua. 2 cubos de caldo de gallina. 1 libra de papa comun. 1 libra de papa criolla. 2 libra de papa pastusa. 5 Mazorcas tiernas, medianas, partidas en 3 trozos",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) En una olla grande coloque la cebolla, el cilantro y el pollo con el agua, lleve a la estufa y a fuego alto haga hervir, Reduzca el fuego y cocine hasta que el pollo empieze a ablandar, retire a menudo la espuma que se forma por encima. 2) Saque de la olla el cilantro y la cebolla, añada los cubos de clado y pimienta al gusto, adicione la papa comun, continue la coccion a fuego medio durante 30 minutos, cuando el pollo este blando, saquelo de la olla, dejelo enfriar, desmenuzelo y guarde. 3) Agregue la papa criolla y la pastusa, verifique la sazon, siga cocinando hasta que las papas esten blandas, entonces adiccione las mazorcas, cocine durante 15 minutos, añada elpollo desmenuzado y cocine de 10 a 15 minutos mas. 4) Sirva bien caliente, y aparte presente crema de leche fresca, alcaparras y aji para servir a su gusto. ",
            },
          ],
        },

        {
          id: 3,
          name: "pagar recibo del agua",
          image: require("../../assets/podarbol1.jpg"),

          ingredients: [
            {
              ingredient01:
                "3 Gajos de cebolla larga. 1 ramo de cilantro. 2 pollos medianos despresados (4-5 libras). 18 tazas de agua. 2 cubos de caldo de gallina. 1 libra de papa comun. 1 libra de papa criolla. 2 libra de papa pastusa. 5 Mazorcas tiernas, medianas, partidas en 3 trozos",
            },
          ],

          preparations: [
            {
              preparation01:
                "1) En una olla grande coloque la cebolla, el cilantro y el pollo con el agua, lleve a la estufa y a fuego alto haga hervir, Reduzca el fuego y cocine hasta que el pollo empieze a ablandar, retire a menudo la espuma que se forma por encima. 2) Saque de la olla el cilantro y la cebolla, añada los cubos de clado y pimienta al gusto, adicione la papa comun, continue la coccion a fuego medio durante 30 minutos, cuando el pollo este blando, saquelo de la olla, dejelo enfriar, desmenuzelo y guarde. 3) Agregue la papa criolla y la pastusa, verifique la sazon, siga cocinando hasta que las papas esten blandas, entonces adiccione las mazorcas, cocine durante 15 minutos, añada elpollo desmenuzado y cocine de 10 a 15 minutos mas. 4) Sirva bien caliente, y aparte presente crema de leche fresca, alcaparras y aji para servir a su gusto. ",
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
      name: "Productos Winkel",
      titlename: "Productos",
      image: require("../../assets/vaso-personalizado2.jpg"),
      stars: 4,
      description: "Productos locales y nacionales",

      reviews: "4.4k",
      category: "Personalizado",
      itemsap: [
        {
          id: 1,
          name: "Vasos Personalizados",
          image: require("../../assets/vaso-personalizado2.jpg"),
          description: "",
        },
        {
          id: 2,
          name: "SkinCare",
          image: require("../../assets/vaso-personalizado2.jpg"),
          description: "",
        },
        {
          id: 3,
          name: "Monopatin Electrico",
          image: require("../../assets/vaso-personalizado2.jpg"),
          description: "",
        },
      ],
    },
  ],
};
