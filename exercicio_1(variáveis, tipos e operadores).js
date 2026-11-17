//Exercício 1
const nome = "Guilherme Jaime";
const idade = 18;
const estudante = true;
console.log(`O meu nome é: ${nome} "${typeof nome}"`);
console.log(`A minha idade é: ${idade} "${typeof idade}"`);
console.log(`Eu sou estudante?: ${estudante} "${typeof estudante}"`);

//Exercício 2

const a = 10;
const b = 3;

console.log(
  `divisão: ${a / b}, produto:${a * b}, soma: ${a + b}, diferença: ${a - b}, resto: ${a % b}`,
);

// Exercício 3

console.log("5" + 2);
//O + junta quando há texto
console.log("5" - 2);
// Dá 3 porque nesse caso o javascript converte sozinho o 5 em um number
console.log("5" === 5);
//  é false porque as duas expressões são de tipos de dados diferentes
console.log(5 == "5");
//verdadeiro porque são valores iguais mas de tipos de dados diferentes


// Exercício 4

const valores = [0, "", "0", [], null];

for (const valor of valores) {
  if (valor) {
    console.log(`${JSON.stringify(valor)} é truthy`)
  } else {
    console.log(`${JSON.stringify(valor)} é falsy`)
  }
}
