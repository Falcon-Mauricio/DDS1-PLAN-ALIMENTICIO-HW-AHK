import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Comida } from "../entities/comida";
import { Objetivo } from "../entities/objetivo";
import { Ingrediente } from "../entities/ingrediente";
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
let comida6;
let ingredientePollo;
let ingredienteAsado;
let ingredientePescado;
let ingredienteCarnePicada;
let ingredienteFideos;
let ingredienteArroz;
let ingredienteQuinoa;
let ingredienteArbeja;
let ingredienteLechuga;
let ingredienteTomate;
let ingredienteLimon;
beforeEach(() => {
    objetivo1 = new Objetivo(true);
    objetivo2 = new Objetivo(true);
    objetivo3 = new Objetivo(true); 
    objetivo5 = new Objetivo(false); 
    objetivo4 = new Objetivo(false); 
    objetivo6 = new Objetivo(false); 
    ingredientePollo = new Ingrediente("Pollo", "Proteina", 60);
    ingredienteAsado = new Ingrediente("Asado", "Proteina", 50);
    ingredientePescado = new Ingrediente("Pescado", "Proteina", 40);
    ingredienteCarnePicada = new Ingrediente("Carne Picada", "Proteina", 20);
    ingredienteFideos = new Ingrediente("Fideos", "Carbohidratos", 80);
    ingredienteArroz = new Ingrediente("Arroz", "Carbohidratos", 30);
    ingredienteQuinoa = new Ingrediente("Quinoa", "Carbohidratos", 50);
    ingredienteArbeja = new Ingrediente("Arbeja", "Vegetal", 10);
    ingredienteLechuga = new Ingrediente("Lechuga", "Vegetal", 25);
    ingredienteTomate = new Ingrediente("Tomate", "Vegetal", 25);
    ingredienteLimon = new Ingrediente("Limón", "Vegetal",5)
    comida1 = new Comida("DM", "Huevos con Pan");
    comida2 = new Comida("DM", "Yogurt con galletitas");
    comida3 = new Comida("AC", "Pollo con arroz y arbeja", [ingredientePollo, ingredienteArroz, ingredienteArbeja]);
    comida4 = new Comida("AC", "Asado con ensalada", [ingredienteAsado, ingredienteLechuga, ingredienteTomate]);
    comida5 = new Comida("AC", "Fideos con tuco", [ingredienteFideos, ingredienteCarnePicada]);
    comida6 = new Comida("AC", "Pescado con quinoa e ingrediente especial",[ingredientePescado, ingredienteQuinoa, ingredienteLimon]);
    planAlimenticio1 = new PlanAlimenticio();
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

test("La calificacion del plan debe ser Buena", () =>{
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

test("La calificacion del plan debe ser Regular", () =>{
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

    const valorObtenido = planAlimenticio1.cantidadTotalComidastipo("DM");
    const valorEsperado = 2;
    expect(valorObtenido).toBe(valorEsperado);
})

test("La cantidad de comidas tipo AC debe ser 3", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    planAlimenticio1.agregarComidas(comida5);

    const valorObtenido = planAlimenticio1.cantidadTotalComidastipo("AC");
    const valorEsperado = 3;
    expect(valorObtenido).toBe(valorEsperado);
})

test("Este plan es fuerte en proteinas y debe ser true", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    
    const valorObtenido = planAlimenticio1.esfuerteEnProteinas();
    const valorEsperado = true;
    expect(valorObtenido).toBe(valorEsperado);

})

test("Este plan no es fuerte en proteinas y debe ser false", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida5);
    
    const valorObtenido = planAlimenticio1.esfuerteEnProteinas();
    const valorEsperado = false;
    expect(valorObtenido).toBe(valorEsperado);
})

test("Este plan es Bien Verde y debe ser true", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida4);
    planAlimenticio1.agregarComidas(comida4);
    
    const valorObtenido = planAlimenticio1.esBienVerde();
    const valorEsperado = true;
    expect(valorObtenido).toBe(valorEsperado);
})

test("Este plan no es Bien Verde y debe ser false", () =>{
    planAlimenticio1.agregarComidas(comida1);
    planAlimenticio1.agregarComidas(comida2);
    planAlimenticio1.agregarComidas(comida3);
    planAlimenticio1.agregarComidas(comida4);
    planAlimenticio1.agregarComidas(comida5);
    
    const valorObtenido = planAlimenticio1.esBienVerde();
    const valorEsperado = false;
    expect(valorObtenido).toBe(valorEsperado);
})