let nome = "Danilo";
let sobreNome = "Tadeu da Silva Conceição ";
let cor = require("cli-color");

function nomeCompleto(nome, sobreNome) {
    console.log(cor.yellow("Olá!",  nome, cor.blue(sobreNome)));
}  

nomeCompleto(nome, sobreNome);

