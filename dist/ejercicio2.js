"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class pago {
    constructor(monto) {
        this.monto = monto;
        if (monto <= 0) {
            throw new Error("El monto debe ser una cantidad positiva. ");
        }
    }
    mostrarRecibo() {
        console.log("----------------------------------------------");
        console.log("RECIBO DE PAGO");
        console.log("Monto procesado: $" + this.monto);
        console.log("Estado exitoso");
        console.log("----------------------------------------------");
    }
}
class pagoEfectivo extends pago {
    procesarPago() {
        console.log("Procesando pago en efectivo...");
        console.log("Por favor, entregue el dinero al cajero.");
    }
}
class pagoTarjeta extends pago {
    constructor(monto, nroTarjeta) {
        super(monto); //enviamos el monto al padre
        this.nroTarjeta = nroTarjeta;
    }
    procesarPago() {
        console.log("Conectando con el banco....");
        console.log("Validando tarjeta termina en: " + this.nroTarjeta.slice(-4));
        console.log("Cargo de $" + this.monto + "autorizado.");
    }
}
console.log("=== SISTEMA DE COBRO UNIVERSITARIO ===");
rl.question("Seleccione método (1: Efectivo, 2: Tarjeta): ", (opcion) => {
    rl.question("Ingrese el monto a pagar: ", (montoInput) => {
        const montoNum = parseFloat(montoInput);
        let miPago; //Variable de tipo padre (poliformismo)
        if (opcion === "1") {
            miPago = new pagoEfectivo(montoNum);
            finalizarTransaccion(miPago);
        }
        else if (opcion === "2") {
            rl.question("Ingrese su número de tarjeta: ", (tarjeta) => {
                miPago = new pagoTarjeta(montoNum, tarjeta);
                finalizarTransaccion(miPago);
            });
        }
        else {
            console.log("Opción no valida.");
            rl.close();
        }
    });
});
function finalizarTransaccion(p) {
    console.log("\nEjecutando proceso de pago...");
    p.procesarPago(); //aqui se decide que codigo correr (efectivo o tarjeta).
    p.mostrarRecibo;
    rl.close(); //cerramos la interfaz para que el programa termine.
}
//# sourceMappingURL=ejercicio2.js.map