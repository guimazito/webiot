document.getElementById('btnSaudar').addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const mensagem = `Olá, ${nome}! Seja bem-vindo(a)!`;
  document.getElementById('mensagem').textContent = mensagem;
});