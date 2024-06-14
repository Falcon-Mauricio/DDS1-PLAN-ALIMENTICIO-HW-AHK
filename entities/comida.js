export class Comida {
    tipo;
    descripcion;
    ingredientes = [];
    colaciones = [];
    bebidas = [];

    constructor(tipo){
        this.tipo = tipo;
    }

    porcentajeProteinas(){
        return (this.ingredientes.filter(i => i.tipo = "proteina").length / this.ingredientes.length)/100;
    }
}