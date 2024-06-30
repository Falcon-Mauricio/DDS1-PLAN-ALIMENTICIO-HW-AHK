import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Comida } from "../entities/comida";
import { Objetivo } from "../entities/objetivo";
import { Ingrediente } from "../entities/ingrediente";
import { Colacion} from "../entities/colacion";
import { Bebida } from "../entities/bebida";
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
let colacion1;
let colacion2;
let colacion3;
let bebida1;
let bebida2;
let bebida3;
let bebida4;
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
    colacion1 = new Colacion("Manzana");
    colacion2 = new Colacion("Flan");
    colacion3 = new Colacion("Papas Fritas");
    bebida1 = new Bebida("Gaseosa");
    bebida2 = new Bebida("Jugo");
    bebida3 = new Bebida("Agua");
    bebida4 = new Bebida("Agus Saborizada");
    planAlimenticio1 = new PlanAlimenticio();
})
test("La cantidad de comidas del plan debe ser 4", () => {

    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida3);
    planAlimenticio1.agregarComida(comida4);
    
    expect(planAlimenticio1.cantidadTotalComidas()).toBe(4);
})

test("La calificacion del plan debe ser Execelente", () =>{

    planAlimenticio1.agregarObjetivo(objetivo1);
    planAlimenticio1.agregarObjetivo(objetivo2);
    planAlimenticio1.agregarObjetivo(objetivo3);

    expect(planAlimenticio1.generarEvaluacion()).toBe("Excelente");
})

test("La calificacion del plan debe ser Muy buena", () =>{

    planAlimenticio1.agregarObjetivo(objetivo1);
    planAlimenticio1.agregarObjetivo(objetivo2);
    planAlimenticio1.agregarObjetivo(objetivo4);

    expect(planAlimenticio1.generarEvaluacion()).toBe("Muy buena");
})

test("La calificacion del plan debe ser Buena", () =>{
    planAlimenticio1.agregarObjetivo(objetivo1);
    planAlimenticio1.agregarObjetivo(objetivo2);
    planAlimenticio1.agregarObjetivo(objetivo3);
    planAlimenticio1.agregarObjetivo(objetivo4);
    planAlimenticio1.agregarObjetivo(objetivo5);
    planAlimenticio1.agregarObjetivo(objetivo6);

    expect(planAlimenticio1.generarEvaluacion()).toBe("Buena");
})

test("La calificacion del plan debe ser Regular", () =>{
    planAlimenticio1.agregarObjetivo(objetivo6);
    planAlimenticio1.agregarObjetivo(objetivo5);
    planAlimenticio1.agregarObjetivo(objetivo4);

    expect(planAlimenticio1.generarEvaluacion()).toBe("Regular");
})

test("La cantidad de comidas tipo DM debe ser 2", () =>{
    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida3);
    planAlimenticio1.agregarComida(comida4);
    planAlimenticio1.agregarComida(comida5);

    expect(planAlimenticio1.cantidadTotalComidastipo("DM")).toBe(2);
})

test("La cantidad de comidas tipo AC debe ser 3", () =>{
    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida3);
    planAlimenticio1.agregarComida(comida4);
    planAlimenticio1.agregarComida(comida5);

    expect(planAlimenticio1.cantidadTotalComidastipo("AC")).toBe(3);
})

test("Este plan es fuerte en proteinas y debe ser true", () =>{
    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida3);
    planAlimenticio1.agregarComida(comida4);
    
    expect(planAlimenticio1.esfuerteEnProteinas()).toBe(true);

})

test("Este plan no es fuerte en proteinas y debe ser false", () =>{
    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida3);
    planAlimenticio1.agregarComida(comida5);
    
    expect(planAlimenticio1.esfuerteEnProteinas()).toBe(false);
})

test("Este plan es Bien Verde y debe ser true", () =>{
    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida4);
    planAlimenticio1.agregarComida(comida4);
    
    expect(planAlimenticio1.esBienVerde()).toBe(true);
})

test("Este plan no es Bien Verde y debe ser false", () =>{
    planAlimenticio1.agregarComida(comida1);
    planAlimenticio1.agregarComida(comida2);
    planAlimenticio1.agregarComida(comida3);
    planAlimenticio1.agregarComida(comida4);
    planAlimenticio1.agregarComida(comida5);
    planAlimenticio1.agregarComida(comida6)
    
    expect(planAlimenticio1.esBienVerde()).toBe(false);
})

test("Se le agrega al plan alimenticio 3 colaciones y me tiene que devolver 3", () =>{
    planAlimenticio1.agregarColacion(colacion1);
    planAlimenticio1.agregarColacion(colacion2);
    planAlimenticio1.agregarColacion(colacion3);

    expect(planAlimenticio1.cantidadTotalDeColaciones()).toBe(3);
});

test("Se le agrega al plan alimenticio 4 bebidas y me tiene que devolver 4", () =>{
    planAlimenticio1.agregarBebida(bebida1);
    planAlimenticio1.agregarBebida(bebida2);
    planAlimenticio1.agregarBebida(bebida3);
    planAlimenticio1.agregarBebida(bebida4);

    expect(planAlimenticio1.cantidadTotalDeBebidas()).toBe(4);
});