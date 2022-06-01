import image1 from "./assets/tapas/flybondi.jpg"
import image2 from "./assets/tapas/mernalumnos.jpg"
import image3 from "./assets/tapas/devjobs.jpg"
import image4 from "./assets/tapas/verifica.jpg"
import image5 from "./assets/tapas/portfolioangular.jpg"
import image6 from "./assets/tapas/appdeapis.jpg"
import image7 from "./assets/tapas/appsalon.jpg"
import image8 from "./assets/tapas/listadetuits.jpg"
import image9 from "./assets/tapas/criptomonedas.jpg"
import image10 from "./assets/tapas/pixabay.jpg"





// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {image: image1, source: 'https://clonflybondiagus.netlify.app/home', title: 'FullStack / MEAN', 
    descripcion: `Hola! a continuación vas a ver un proyecto inspirado en un challenge fullstack de la empresa Flybondi. El un pequeño "clon" del sitio flybondi.com (te invito a que lo veas para tomar mejor dimensión de la idea). Usando Angular para el frontend y el backend hecho Node y Express, la base de datos es MongoDb. Consulta a través de un formulario, y recibe información almacenada en la base de datos acerca de vuelos (destino, origen, cantidad de pasajeros, presupuesto y fecha
Espero te guste, saludos!
    `,
    }, 
    {image: image2, source: 'https://mernalumnosagus.netlify.app/', title: 'FullStack / MERN',
    descripcion: `Hola! a continuación vas a ver un proyecto que realizé enfocado en practicar el stack MERN (Mongo, Express, React y Node). Es una pequeña aplicación que lista, crea y elimina, registros almacenados en la base de datos (MongoDb). El backend es Node y Express. El diseño está basado en componentes de Material Ui.
Espero te guste, saludos!`
    }, 
    {image: image3, source: 'https://devjobsagus.herokuapp.com/', title: 'FullStack / NODE-Express',
    descripcion: `Hola! a continuación vas a ver un proyecto realizado con Node. Es de un curso que realizé del profesor Juan Pablo de la torre Valdéz. Utilizando Express y Handlebars como template engine para correr las vistas. El proyecto es MVC (modelo, vista y controlador). La aplicación permite listar, crear usuarios, actualizar y elimina registros de la base de datos (MongoDb). Se basa en vacantes laborales.
Espero te guste, saludos!`
}, 
    {image: image4, source: '/', title: 'Angular',
    descripcion: `Hola! por aquí algunos trabajos que hice para la empresa Verifica, trabajando sobre una aplicación Angular. Son principalmente formularios validados, para un panel de admin. El usuario administrador puede loguearse, y filtrar busquedas por una fecha puntual, o por período fechas, con una inicial y final, también por número de ip. Luego con la información del usuario, a través de una petición en un service, traíamos los datos de la base de datos y los mostrabamos en el frontend, en forma de cards y tablas. Esta parte del sitio no se puede visitar ya que es privada.
Lo comparto como para que se vea la idea y una noción de la actividad. 
Saludos!`
}, 
    {image: image5, source: 'https://atrezzangularportfolio.netlify.app/', title: 'Angular',
    descripcion: `Hola! a continuación vas a visitar un portfolio que hice con Angular. Cuando lo hice, mi objetivo estaba puesto en armar el proyecto (crear proyecto, componentes, modulos, routing, etc), y principalmente la idea era poder trabajar con componentes de Material UI (buttons, sidenav, accordion, slider). En su contenido hay algunos proyectos que fui haciendo, y también algo de información personal como mi CV y certificados de cursos. 
Espero te guste, saludos!`
}, 
    {image: image6, source: 'https://infinite-river-22403.herokuapp.com/', title: 'Angular',
    descripcion: `Hola! a continuación vas a visitar una aplicación hecha con Angular. La hice con un amigo de toda la vida, Hernán Cuevas. Nuestro objetivo estuvo puesto en practicar, a través de services, peticiones a diferentes APIS (The Cocktail DB, Chuck Norris(sisí, muy bizarro) y PokeApi). Las búsquedas se realizan a través de diferentes parámetros (traer todos, por id, por categorías)
Espero te guste, saludos!`  
}, 
    {image: image7, source: 'https://agustintrezza5.netlify.app/', title: 'JavaScript',
    descripcion: `Hola! a continuación vas a ver un proyecto de un curso de JavaScript que hice. Es una pequeña app de una peluquería que programa turnos, a través de las diferentes pantallas. Se selecciona el servicio, se ingresan los datos del usuario y se genera el resumen final de la operación. Tiene determinadas lógicas interesantes, el horario y la fecha deben ser permitidos.
Espero te guste, saludos!`
}, 
    {image: image8, source: 'https://agustrezza-todojs.netlify.app/',title: 'JavaScript',
    descripcion: `Hola! a continuación vas a ver una pequeña aplicación hecha con JavaScript para comentarios, la misma permite crearlos, listarlos, y eliminarlos. Los mismos son almacenados en LocalStorage, esto permite que si el usuario sale del sitio y vuelve a ingresar estos permanezcan ahí, solo desaparecen si se reinicia el storage, o se borra la memoria caché.
Espero te guste, saludos!`  
},
    {image: image9, source: 'https://agustrezza-criptojs.netlify.app/', title: 'JavaScript - API',
    descripcion: `Hola! a continuación vas a visitar una pequeña aplicación hecha con JavaScript, en donde consultando una API que devuelve información del valor de criptomonedas. Se selecciona el tipo de moneda local, y luego, se puede seleccionar entre las principales 10 criptomonedas (la versión paga de la API permite muchas más). Luego la información devuelta es mostrada.
Espero te guste, saludos!` 
}, 
    {image: image10, source: 'https://agustrezza-pixabayjs.netlify.app/', title: 'JavaScript - API',
    descripcion: `Hola a continuación vas a visitar, una pequeña aplicación hecha con JavaScript, en donde se ingresa un término de búsqueda, y con esa información se consulta la API de Pixabay, para imágenes. La información recibida es mostrada en la aplcación. Algo interesante que tiene es la paginación de los resultados.
Espero te guste, saludos!` 
}

]