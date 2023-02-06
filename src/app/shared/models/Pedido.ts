import { LatLng } from "leaflet";
import { CanastaItem } from "./CanastaItem";

export class Pedido{
    id!:number;
    items!:CanastaItem[];
    precioTotal!:number;
    nombre!:string;
    direccion!:string;
    dirreccionLatLng?:LatLng;
    idPago!:string;
    fechaCreado!:string;
    estatus!:string
}