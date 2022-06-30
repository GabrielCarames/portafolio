import googleSearchClone from "../assets/screenshots/google-search-clone.png"
import googleTranslateClone from "../assets/screenshots/google-translate-clone.png"
import reactWordle from "../assets/screenshots/react-wordle.png"
import spotifyClone from "../assets/screenshots/spotify-clone.png"
import youtubeClone from "../assets/screenshots/youtube-clone.png"
import chira from "../assets/screenshots/chira.png"
import react from "../assets/icons/react-png.png"
import node from "../assets/icons/node-png.png"
import express from "../assets/icons/express-png.png"
import socket from "../assets/icons/socket-png.png"
import javaScript from "../assets/icons/javascript-png.png"
import sass from "../assets/icons/sass-png.png"
import redux from "../assets/icons/redux-png.png"
import mongodb from "../assets/icons/mongodb-png.png"
import firebase from "../assets/icons/firebase-png.png"

export const projects = [
  [
    { title: "React Wordle" },
    { image: reactWordle },
    {
      technologies: [
        { name: "React.js", icon: react, backgroundColor: "#1e282f", color: "#90cdf4" },
        { name: "Sass", icon: sass, backgroundColor: "#302428", color: "#fbb6ce" }
      ]
    },
    {
      description:
        "Versión en React del juego Wordle. Se tienen 6 intentos para adivinar la palabra correcta, y en cada intento se  mostrarán las pistas de cada letra. La aplicación es responsive, el teclado puede ser accionado por las propias teclas o con el mouse, cuenta con una guía de juego, y estadísticas."
    },
    {
      links: {
        repository: "https://github.com/GabrielCarames/react-wordle",
        visit: "https://react-wordle-gabrielcarames.vercel.app/"
      }
    }
  ],
  [
    { title: "Clon de Spotify" },
    { image: spotifyClone },
    {
      technologies: [
        { name: "React.js", icon: react, backgroundColor: "#1e282f", color: "#90cdf4" },
        { name: "Sass", icon: sass, backgroundColor: "#302428", color: "#fbb6ce" }
      ]
    },
    {
      description:
        "Clon de Spotify con algunas de sus funcionalidades más importantes. Cuenta con un reproductor de canciones directamente vinculado con Spotify, sincronización automática de canciones, buscador de canciones, playlists, artistas, podcasts, etc., registro e ingreso con cuenta oficial de Spotify."
    },
    {
      links: {
        repository: "https://github.com/GabrielCarames/Spotify-Clone",
        visit: "https://gabriel-carames-spotify-clone.herokuapp.com/"
      }
    }
  ],
  [
    { title: "Clon de Google Search" },
    { image: googleSearchClone },
    {
      technologies: [
        { name: "React.js", icon: react, backgroundColor: "#1e282f", color: "#90cdf4" },
        { name: "Redux", icon: redux, backgroundColor: "#2a2530", color: "#c7afe9" },
        { name: "Sass", icon: sass, backgroundColor: "#302428", color: "#fbb6ce" }
      ]
    },
    {
      description:
        "Aplicación clon de Google Search que utiliza la Scale SERP API. Contiene un buscador junto a dos botones para indicar país y región de la búsqueda. Cada búsqueda puede contar con una serie de resultados como carta lateral informativa, preguntas frecuentes, tweets recientes, ubicación en Google Maps de lugares cercanos, búsquedas relacionadas, paginación, etc. Además, cuenta con un diseño responsivo a todos los dispositivos."
    },
    {
      links: {
        repository: "https://google-search-clone-gabrielcarames.vercel.app/",
        visit: "https://github.com/GabrielCarames/Google-Search-clone"
      }
    }
  ],
  [
    { title: "Clon de Google Translate" },
    { image: googleTranslateClone },
    {
      technologies: [
        { name: "React.js", icon: react, backgroundColor: "#1e282f", color: "#90cdf4" },
        { name: "Redux", icon: redux, backgroundColor: "#2a2530", color: "#c7afe9" },
        { name: "Sass", icon: sass, backgroundColor: "#302428", color: "#fbb6ce" }
      ]
    },
    {
      description:
        "Traductor web clon de Google Translate a través de la api de Google Translate API por Google Cloud. Está compuesto por una lista muy grande de idiomas de todo el mundo, buscador de idiomas, traducciones rápidas, sistema de intercambiado de idiomas, diseño responsivo, etc."
    },
    {
      links: {
        repository: "https://google-translate-clone-gabrielcarames.vercel.app/",
        visit: "https://github.com/GabrielCarames/Google-Translate-clone"
      }
    }
  ],
  [
    { title: "Chira" },
    { image: chira },
    {
      technologies: [
        { name: "React.js", icon: react, backgroundColor: "#1e282f", color: "#90cdf4" },
        { name: "JavaScript", icon: javaScript, backgroundColor: "#302e1d", color: "#f2e885" },
        { name: "Sass", icon: sass, backgroundColor: "#302428", color: "#fbb6ce" },
        { name: "Node.js", icon: node, backgroundColor: "#202c24", color: "#95deae" },
        { name: "Express.js", icon: express, backgroundColor: "#2c2d2e", color: "#d5dae2" },
        { name: "Socket.io", icon: socket, backgroundColor: "#2B2C2E", color: "#ffffff" },
        { name: "firebase", icon: firebase, backgroundColor: "#302e1d", color: "#f2e885" },
        { name: "MongoDB", icon: mongodb, backgroundColor: "#302e1d", color: "#f2e885" }
      ]
    },
    {
      description: `Página web similar a "WhatsApp" o "Telegram". Cuenta con un chat con mensajes en tiempo real, chats grupales, historial de mensajes, búsqueda de mensajes, perfil de contacto/grupo, subida de imágenes, envío de emojis, buscador de contactos, agregar contactos, cambiar foto de perfil y de chat grupal, etc.`
    },
    {
      links: {
        repository: "https://github.com/GabrielCarames/Chira",
        visit: "https://chira-project.herokuapp.com/"
      }
    }
  ],
  [
    { title: "Clon de Youtube" },
    { image: youtubeClone },
    {
      technologies: [
        { name: "React.js", icon: react, backgroundColor: "#1e282f", color: "#90cdf4" },
        { name: "Sass", icon: sass, backgroundColor: "#302428", color: "#fbb6ce" }
      ]
    },
    {
      description: `Clon de Youtube utilizando React y la API Youtube API v3. La aplicación cuenta con las funcionalidades más importantes como Inicio, suscripciones, reproductor de videos, comentarios, videos relacionados, buscador de videos. Cada video muestra una serie de datos tal como descripción, visualizaciones, likes y mucho más.`
    },
    {
      links: {
        repository: "https://github.com/GabrielCarames/youtube-clone",
        visit: "https://youtube-clone-gabrielcarames.vercel.app/"
      }
    }
  ]
]
