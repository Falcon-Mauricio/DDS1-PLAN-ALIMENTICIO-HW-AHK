export class Comida {
    tipo;
    descripcion;
    ingredientes = [];
    colaciones = [];
    bebidas = [];

    constructor(tipo){
        this.tipo = tipo;
    }
}