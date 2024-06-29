export class Comida {
    tipo;
    descripcion;
    ingredientes = [];
    colaciones = [];
    bebidas = [];

    constructor(tipo, descripcion, ingredientes = []){
        this.tipo = tipo;
        this.descripcion = descripcion;
        if (tipo === "AC"){
            this.ingredientes = ingredientes;
            //Al ser solo tres ingredientes no es tan necesario un for o bucle pero si eran mas ingredientes si
        }
    }

    agregarIngrediente(ingrediente){
        this.ingredientes.push(ingrediente);
    }

    porcentajeProteinas(){
        return (this.ingredientes.tipo === "proteina")
    }
}