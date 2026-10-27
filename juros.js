const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Aplicação de Juros:\n");
rl.question("Digite o valor devido: R$ ", (principal) => {
    rl.question("Quantos dias se passaram desde o vencimento? ", (diastexto) => {
        const valor = Number(principal);
        const dias = Number(diastexto);
        console.log("\n  Valor original da divida: R$ " + valor);
        console.log("Dias em atraso: " + dias);

        let juros = 0;
        if (dias > 15) {
            juros = 10;
        } else {
            juros = 5;
        }
        console.log("Juros a serem aplicados: R$ " + juros + "%");

        const valorJuros = valor * (juros / 100);
        const total = valor + valorJuros;
        console.log("Valor total a ser pago: R$ " + total);
        rl.close();
    });
});


