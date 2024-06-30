export class Objetivo {
    cumplido;
    descripcion;

    constructor(cumplido){
        this.cumplido = cumplido;
    }
    
    modificarDescripcion(texto){
        this.descripcion = texto;
    }
    
}