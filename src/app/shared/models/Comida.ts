export class Comida{
     id!:string; // ! siginifica Requerido
     nombre!:string;
     precio!:number;
     etiquetas?: string[];
     favorito!:boolean;
     estrellas!:number;
     imagenUrl!: string;
     tiempo!:string;
     restaurante!:string;
}