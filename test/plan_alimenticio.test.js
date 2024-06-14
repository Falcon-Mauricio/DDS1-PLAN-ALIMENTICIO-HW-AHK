import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Comida } from "../entities/comida";
import { Objetivo } from "../entities/objetivo";
//2. Permitir saber la cantidad total de comidas de un plan alimenticio.
let planAlimenticio1;
let objetivo1;
let objetivo2;
let objetivo3; 
let objetivo5; 
let objetivo4;
let objetivo6; 
let comida1;
let comida2;
let comida3;
let comida4;
let comida5;
beforeEach(() => {
    planAlimenticio1 = new PlanAlimenticio();
    objetivo1 = new Objetivo(true);
    objetivo2 = new Objetivo(true);
    objetivo3 = new Objetivo(true); 
    objetivo5 = new Objetivo(false); 
    objetivo4 = new Objetivo(false); 
    objetivo6 = new Objetivo(false); 
    comida1 = new Comida(1,60);
    comida2 = new Comida(1,40);
    comida3 = new Comida(0,60);
    comida4 = new Comida(0,60);
    comida5 = new Comida(0,55);
})
test("La cantidad de comidas del plan debe ser 4", () => {

    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    
    const valorObtenido = planAlimenticio1.cantidadTotalComidas();
    const valorEsperado = 4;
    expect(valorObtenido).toBe(valorEsperado);
})

test("La calificacion del plan debe ser Execelente", () =>{

    planAlimenticio1.agregarObjetivo(objetivo1);
    planAlimenticio1.agregarObjetivo(objetivo2);
    planAlimenticio1.agregarObjetivo(objetivo3);

    const valorObtenido = planAlimenticio1.generarEvaluacion();
    const valorEsperado = "Excelente"
    expect(valorObtenido).toBe(valorEsperado);
})

test("La calificacion del plan debe ser Muy buena", () =>{

    planAlimenticio1.agregarObjetivo(objetivo1);
    planAlimenticio1.agregarObjetivo(objetivo2);
    planAlimenticio1.agregarObjetivo(objetivo4);

    const valorObtenido = planAlimenticio1.generarEvaluacion();
    const valorEsperado = "Muy buena"
    expect(valorObtenido).toBe(valorEsperado);
})

test("La calificacion del plan debe ser buena", () =>{
    planAlimenticio1.agregarObjetivo(objetivo1);
    planAlimenticio1.agregarObjetivo(objetivo2);
    planAlimenticio1.agregarObjetivo(objetivo3);
    planAlimenticio1.agregarObjetivo(objetivo4);
    planAlimenticio1.agregarObjetivo(objetivo5);
    planAlimenticio1.agregarObjetivo(objetivo6);

    const valorObtenido = planAlimenticio1.generarEvaluacion();
    const valorEsperado = "Buena"
    expect(valorObtenido).toBe(valorEsperado);
})

test("La calificacion del plan debe ser Execelente", () =>{
    planAlimenticio1.agregarObjetivo(objetivo6);
    planAlimenticio1.agregarObjetivo(objetivo5);
    planAlimenticio1.agregarObjetivo(objetivo4);

    const valorObtenido = planAlimenticio1.generarEvaluacion();
    const valorEsperado = "Regular"
    expect(valorObtenido).toBe(valorEsperado);
})

test("La cantidad de comidas tipo DM debe ser 2", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    planAlimenticio1.agregarComidas(comida5);

    const valorObtenido = planAlimenticio1.cantidadTotalComidasDM();
    const valorEsperado = 2;
    expect(valorObtenido).toBe(valorEsperado);
})

test("La cantidad de comidas tipo DM debe ser 2", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    planAlimenticio1.agregarComidas(comida5);

    const valorObtenido = planAlimenticio1.cantidadTotalComidasAC();
    const valorEsperado = 3;
    expect(valorObtenido).toBe(valorEsperado);
})

test("Este plan es fuerte en proteinas", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    planAlimenticio1.agregarComidas(comida5);
    
    const valorObtenido = planAlimenticio1.esFuerteEnProteinas();
    const valorEsperado = true;
    expect(valorObtenido).toBe(valorEsperado);

})