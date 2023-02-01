import { Comida } from "./app/shared/models/Comida";

export const comida_ejemplos: Comida[] = [
   {
    id:'1',
    nombre: 'Pizza Pepperoni',
    tiempo: '10-20 mins',
    precio: 25000,
    favorito: false,
    estrellas: 4.5,
    imagenUrl: 'assets/pizza-pepperoni.jpg',
    etiquetas: ['Comida rapida', 'Pizza', 'italiana'],
    local: 'Papa Jeffs'
   },

   {
    id:'2',
    nombre: 'Hamburguesa especial',
    tiempo: '10-15 mins',
    precio: 14000,
    favorito: true,
    estrellas: 3.5,
    imagenUrl: 'assets/hamburgueza-especial.jpg',
    etiquetas: ['Comida rapida', 'Hamburgueza'],
    local: 'Hamburguezas El Corralito'
   },

   {
    id:'3',
    nombre: 'Sushi California',
    tiempo: '20-25 mins',
    precio: 28500,
    favorito: false,
    estrellas: 4.8,
    imagenUrl: 'assets/sushi-california.jpg',
    etiquetas: ['Comida rapida', 'asiatico'],
    local: 'Saryu Japon'
   },

   {
    id:'4',
    nombre: ' Combo Pollo frito',
    tiempo: '15-20 mins',
    precio: 22000,
    favorito: true,
    estrellas: 4.0,
    imagenUrl: 'assets/pollo-frito.jpg',
    etiquetas: ['Comida rapida', 'pollo', 'papas fritas'],
    local: 'Frosby'

   },

   {
      id:'5',
      nombre: 'Antigripales',
      tiempo: '10 mins',
      precio: 5000,
      favorito: true,
      estrellas: 2.5,
      imagenUrl: 'assets/pastillas.jpg',
      etiquetas: ['medicamentos', 'farmacia', 'gripa'],
      local: 'La rebajita'
  
     }
]