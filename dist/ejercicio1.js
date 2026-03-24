"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Salvadoreno extends persona {
    saludar() {
        console.log("¡Hola que tal! me llamo " + this.nombre);
    }
}
class Ingles extends persona {
    saludar() {
        console.log("Hello my name is " + this.nombre);
    }
}
console.log("--- SIMULADOR DE SALUDOS");
rl.question("¿Como te llamas?: ", (nombre) => {
    rl.question("Elige idioma (1: español, 2: Ingles): ", (opcion) => {
        let alguien;
        if (opcion === "1") {
            alguien = new Salvadoreno(nombre);
        }
        else {
            alguien = new Ingles(nombre);
        }
        alguien.saludar();
        rl.close();
    });
});
//# sourceMappingURL=ejercicio1.js.map