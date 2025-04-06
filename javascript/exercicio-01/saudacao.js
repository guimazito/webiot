const nome = process.argv[2];
const idade = process.argv[3];

if (!nome || !idade) {
  console.log("Uso correto: node saudacao.js [nome] [idade]");
} else {
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}