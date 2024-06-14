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
beforeEach(() => {
    planAlimenticio1 = new PlanAlimenticio();
    objetivo1 = new Objetivo(true);
    objetivo2 = new Objetivo(true);
    objetivo3 = new Objetivo(true); 
    objetivo5 = new Objetivo(false); 
    objetivo4 = new Objetivo(false); 
    objetivo6 = new Objetivo(false); 
})
test("La cantidad de comidas del plan debe ser 4", () => {
    const comida1 = new Comida();
    const comida2 = new Comida();
    const comida3 = new Comida();
    const comida4 = new Comida();

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