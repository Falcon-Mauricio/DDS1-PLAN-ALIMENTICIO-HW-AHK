export class PlanAlimenticio{
    paciente;
    profesional;
    duracion;
    objetivos = [];   
    comidas = [];
    colaciones = [];
    bebidas = [];
    
    constructor(profesional){
        this.profesional = profesional;
    }
    agregarComida(comida){
        this.comidas.push(comida);
    }

    agregarColacion(colacion) {
        this.colaciones.push(colacion);
    }

    agregarBebida(bebida) {
        this.bebidas.push(bebida);
    }

    agregarObjetivo(objetivo){
        this.objetivos.push(objetivo);
    }

    cantidadTotalComidas() {
        return this.comidas.length;
    }

    cantidadTotalComidastipo(tipoDeComida) {
        return this.comidas.filter(c => c.tipo === tipoDeComida).length;
    }

    cantidadTotalDeColaciones() {
        return this.colaciones.length;
    }

    cantidadTotalDeBebidas() {
        return this.bebidas.length;
    }

    cantidadDeObjetivosCumplidos(){
        return this.objetivos.filter(o => o.cumplido).length;
    }

    porcentajeDeObjetivosCumplidos(){
        return (this.cantidadDeObjetivosCumplidos()/this.objetivos.length)*100;
    }

    generarEvaluacion(){
        let calificacion = "";
        let objetivosCumplidos = this.porcentajeDeObjetivosCumplidos();

        if(objetivosCumplidos == 100){
            calificacion = "Excelente";
        }
        else if(objetivosCumplidos >= 60 && objetivosCumplidos <= 99){
            calificacion = "Muy buena";
        }
        else if(objetivosCumplidos >= 50 && objetivosCumplidos <= 59){
            calificacion = "Buena";
        }
        else calificacion = "Regular";
        return calificacion;
    }

    esfuerteEnProteinas() {
        const comidasAC = this.comidas.filter(comida => comida.tipo === "AC");
        return comidasAC.every(comida => comida.obtenerPorcentajeDe("Proteina") >= 50);
    }

    esBienVerde() {
        const comidasAC = this.comidas.filter(comida => comida.tipo === "AC");
        return comidasAC.every(comida => comida.obtenerPorcentajeDe("Vegetal") >= 35);
    }
}