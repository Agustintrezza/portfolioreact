import certificadoReact from "./assets/images/certificadoReact.pdf"
import certjsmoderno from "./assets/images/certjsmoderno.pdf"
import cssgridflex from "./assets/images/cssgridflex.pdf"
import webcompleto1 from "./assets/images/webcompleto1.pdf"
import webcompleto2 from "./assets/images/webcompleto2.pdf"
import certwordpress from "./assets/images/certwordpress.pdf"
import certjsfherrera from "./assets/images/certjsfherrera.pdf"
import figma from "./assets/images/figma.pdf"
import cv from "./assets/images/cv.pdf"





export const certificados = [
    {
        id: 1,
        titulo: 'React',
        source : certificadoReact,
        descripcion: 'En este curso realizamos diferentes aplicaciones. Integrando Mongo, Node y Express con React. En las mismas hay request CRUD, conexiones con APIS a través de FETCH API y Axios. Hooks, components, REDUX, manejo de validaciones, formularios, context, Style Components. Realizamos algunas aplicaciones Server Side Rendering utilizando Next y Gatsby. Hicimos los deployment de las aplicaciones en Netlify, Heroku y Zeit. También vimos conceptos de testing a React a través de Jets y Cypress.'
    },
    {
        id: 2,
        titulo: 'JavaScript Moderno',
        source : certjsmoderno,
        descripcion: 'En este curso primero vimos los conceptos de cero a avanzado en JavaScript Moderno. Manejo del DOM, eventos, POO, arreglos, objetos, condicionales, funciones y sus tipos, generadores, iteradores, promises, template literals, prototypes, clases, herencia, etc. Luego realizamos diferentes aplicaciones, utilizando diferentes tecnologías como React, Node, Express, MongoDB,y Electron. También consumimos en otras, APIS con JSON y Fetch. Por últimos vimos nociones al testing con Jest y Cypress, debug y performance.'
    },
    {
        id: 3,
        titulo: 'CSS Flexbox y Grid',
        source : cssgridflex,
        descripcion: 'En este curso realizamos diferentes diseños de páginas enfocados en prácticar las técnicas y herramientas de CSS3 como Flexbox y CSS Grid, nociones generales, sintáxis, estructuras, diseño Responsive, media queries, posicionamiento, imágenes (webp), logos, HTML5 (etiquetas, formularios, video) etc. Gulp Workflows, SASS (mixins, variables), perfomance. Utilicé en algunos de los proyectos Tailwind, Bootstrap y Skeleton.'
    },
]

export const certificados1 = [
    {
        id: 4,
        titulo1: 'Desarrollo Web',
        source : webcompleto1,
        descripcion1: 'En este curso trabajamos realizando diferentes páginas web utilizando diferentes tecnologías como HTML5, CSS3, SASS, GULP, JAVASCRIPT. Realizamos galerías, navegaciones, formularios, validaciones, un carrito con cotizador, registros a la base de datos, CRUD`S (Postman), sistema de inicio de sesión, agregar la información dinámicamente desde el backend con una base de datos MySQL administrada a través de TablePlus. Conectamos también en algunas de estos proyectos con API´S.'
    },
    {
        id: 5,
        titulo1: 'Desarrollo Web II',
        source : webcompleto2,
        descripcion1: 'En este curso vimos principalmente: HTML5 ( estructuras, sintáxis, elementos y etiquetas, manejo de imágenes, listas, tablas, formularios, clases, importar hojas de estilos, scripts, fuentes, iconos, etc). – CSS3 (Selectores, sintáxis, media queries, posicionamiento, colores, bordes, márgenes, padding, fuentes, imágenes, íconos, display, gradientes, sombras, transiciones, flexbox, etc. -JavaScript ( Tipos de datos, operadores, ciclos, arreglos, funciones, objetos, clases, manejo de herencia. POO, manejo de errores, arrow y callbacks functions, promises, manejo del dom, eventos, etc.'
    },
    {
        id: 6,
        titulo1: 'WordPress',
        source : certwordpress,
        descripcion1: 'En este curso conocí WordPress, y a través de complementarlo con WooCommerce realizamos un sitio web responsive, con tienda virtual. Aquí utilicé las diferentes herramientas de WordPress, como pluggins para diseño, cobros, funcionalidades, botones de carro de compras, de menú etc. A su vez, también a la carpeta del proyecto le sumamos un archivo .css para complementar y realizar un diseño mas personal al sitio. Por último le asigne el dominio www.doblerueda.online y lo hospedé en Hostinguer.'
    },
]

export const certificados2 = [
    {
        id: 7,
        titulo2: 'JavaScript(EC5)',
        source : certjsfherrera,
        descripcion2: 'Conceptos generales, sintaxis, variables, tipos de datos, funciones y sus tipos, objetos, arreglos, iteradores, condicionales, prototypes, JSON.'
    },
    {
        id: 8,
        titulo2: 'FIGMA',
        source : figma,
        descripcion2: 'En este curso práctico, hicimos una interfaz de una app de música, utilizando la herramienta en buena profundidad, y considerando nociones de diseño.'
    },
]

export const cve = [
    {
        source: cv,
    },
]