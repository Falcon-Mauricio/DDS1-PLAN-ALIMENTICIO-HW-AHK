export class PlanAlimenticio{
    datos_usuario = [];
    duracion;
    objetivos = [];   
    comidas = [];

    agregarComidas(comida){
        this.comidas.push(comida);
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

    esFuerteEnProteinas(){
        let comidasAC = this.comidas.filter(c => c.tipo === "AC");
        return comidasAC.every(c => c.porcentajeProteinas() >= 50);
    }
}