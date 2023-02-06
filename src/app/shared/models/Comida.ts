export class Comida{
     id!:string; // ! siginifica Requerido
     nombre!:string;
     precio!:number;
     etiquetas?: string[];
     estrellas!:number;
     imagenUrl!: string;
     tiempo!:string;
     local!:string;
}