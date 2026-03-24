"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Transporte {
    //Un atributo protegido (protected) 
    constructor(nombre) {
        this.nombre = nombre;
    }
    //metodo concreto
    mostrarDetalle(distancia) {
        const total = this.calcularCosto(distancia);
        console.log("--------------------------------------------");
        console.log("Detalles del viaje");
        console.log("Transporte: " + this.nombre);
        console.log("Distancia: " + distancia + "KM");
        console.log("TOTAL A PAGAR: ", +total.toFixed(2));
        console.log("--------------------------------------------");
    }
}
//Clases Hijas
class taxi extends Transporte {
    constructor() {
        super("Taxi");
    }
    calcularCosto(distancia) {
        return distancia * 0.50;
    }
}
class Uber extends Transporte {
    constructor() {
        super("Uber");
    }
    calcularCosto(distancia) {
        return distancia * 0.75;
    }
}
//Interacción (Consola): Utilizando la librería readline, el programa debe
console.log("=== SISTEMA DE TRANSPORTE ===");
rl.question("Seleccione Transporte (1: Taxi, 2: Uber): ", (opcion) => {
    rl.question("Ingresa la distancia en KM: ", (distanciaInput) => {
        const distancia = parseFloat(distanciaInput);
        if (isNaN(distancia) || distancia <= 0) {
            console.log("Distancia invalida.");
            rl.close();
            return;
        }
        let Transporte; //polimorfo
        if (opcion === "1") {
            Transporte = new taxi();
            finalizarViaje(Transporte, distancia);
        }
        else if (opcion === "2") {
            Transporte = new Uber();
            finalizarViaje(Transporte, distancia);
        }
        else {
            console.log("Opción no valida.");
            rl.close();
        }
    });
});
//Función final
function finalizarViaje(t, distancia) {
    console.log("\nCalculando costo del viaje...");
    t.mostrarDetalle(distancia); //aqui ocurre el polimorfismo
    rl.close();
}
//# sourceMappingURL=transporte.js.map