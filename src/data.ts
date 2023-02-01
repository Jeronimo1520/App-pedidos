import { Comida } from "./app/shared/models/Comida";

export const comida_ejemplos: Comida[] = [
   {
    id:'1',
    nombre: 'Pizza Pepperoni',
    tiempo: '10-20',
    precio: 25000,
    favorito: false,
    estrellas: 4.5,
    imagenUrl: 'assets/pizza-pepperoni.jpg',
    etiquetas: ['Comida rapida', 'Pizza', 'italiana'],
    restaurante: 'Papa Jeffs'
   },

   {
    id:'2',
    nombre: 'Hamburgueza especial',
    tiempo: '10-15',
    precio: 14000,
    favorito: true,
    estrellas: 3.5,
    imagenUrl: 'assets/hamburgueza-especial.jpg',
    etiquetas: ['Comida rapida', 'Hamburgueza'],
    restaurante: 'Hamburguezas El Corralito'
   },

   {
    id:'3',
    nombre: 'Sushi California',
    tiempo: '20-25',
    precio: 28500,
    favorito: false,
    estrellas: 4.8,
    imagenUrl: 'assets/sushi-california.jpg',
    etiquetas: ['Comida rapida', 'asiatico'],
    restaurante: 'Saryu Japon'
   },

   {
    id:'4',
    nombre: ' Combo Pollo frito',
    tiempo: '15-20',
    precio: 22000,
    favorito: true,
    estrellas: 4.0,
    imagenUrl: 'assets/pollo-frito.jpg',
    etiquetas: ['Comida rapida', 'pollo', 'papas fritas'],
    restaurante: 'Frosby'

   }
]