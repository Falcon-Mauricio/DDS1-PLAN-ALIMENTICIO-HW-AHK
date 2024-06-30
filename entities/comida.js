export class Comida {
    tipo;
    descripcion;
    ingredientes = [];

    constructor(tipo, descripcion, ingredientes = []){
        this.tipo = tipo;
        this.descripcion = descripcion;
        if (tipo === "AC"){
            this.ingredientes = ingredientes;
            //Al ser solo tres ingredientes no es tan necesario un for o bucle pero si eran mas ingredientes si
        }
    }

    obtenerPorcentajeDe(tipoDeIngrediente) {
        const ingredientesDelTipo = this.ingredientes.filter(ingrediente => ingrediente.tipo === tipoDeIngrediente);
        let porcentajeTotal = 0;
    
        ingredientesDelTipo.forEach(ingrediente => {
            porcentajeTotal += ingrediente.porcentaje;
        });
    
        return porcentajeTotal;
    }
}