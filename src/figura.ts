import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


abstract class Figura {
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;

    public mostrarResultados(): void {
        console.log("-----------------------------------");
        console.log("RESULTADOS");
        console.log("Área: " + this.calcularArea().toFixed(2));
        console.log("Perímetro: " + this.calcularPerimetro().toFixed(2));
        console.log("-----------------------------------");
    }
}


class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    override calcularArea(): number {
        return this.lado * this.lado;
    }

    override calcularPerimetro(): number {
        return 4 * this.lado;
    }
}


class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    override calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    override calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

console.log("=== CALCULADORA DE FIGURAS ===");

rl.question("Seleccione figura (1: Cuadrado, 2: Círculo): ", (opcion: string) => {

    if (opcion === "1") {
        rl.question("Ingrese el lado del cuadrado: ", (ladoInput: string) => {
            const lado = parseFloat(ladoInput);

            if (isNaN(lado) || lado <= 0) {
                console.log("Valor inválido.");
                rl.close();
                return;
            }

            const figura: Figura = new Cuadrado(lado); 
            finalizar(figura);
        });
    } 
    else if (opcion === "2") {
        rl.question("Ingrese el radio del círculo: ", (radioInput: string) => {
            const radio = parseFloat(radioInput);

            if (isNaN(radio) || radio <= 0) {
                console.log("Valor inválido.");
                rl.close();
                return;
            }

            const figura: Figura = new Circulo(radio); 
            finalizar(figura);
        });
    } 
    else {
        console.log("Opción no válida.");
        rl.close();
    }
});

function finalizar(f: Figura) {
    console.log("\nCalculando resultados...");
    f.mostrarResultados(); 
    rl.close();
}