import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
abstract class persona{
    constructor(public nombre: string) {}

    abstract saludar(): void;
}

class Salvadoreno extends persona{
    saludar(): void {
        console.log("¡Hola que tal! me llamo " + this.nombre);
    }
}

class Ingles extends persona {
    saludar(): void {
        console.log("Hello my name is " + this.nombre);
    }
}
console.log("--- SIMULADOR DE SALUDOS");

rl.question("¿Como te llamas?: ", (nombre: string) =>{
    rl.question("Elige idioma (1: español, 2: Ingles): ", (opcion: string)=>{

        let alguien: persona;

        if (opcion === "1"){
            alguien = new Salvadoreno(nombre);
        } else{
            alguien = new Ingles(nombre);
        }

        alguien.saludar();
        rl.close();
    });
});


