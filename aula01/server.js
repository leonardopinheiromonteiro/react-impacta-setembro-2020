// requisitar o módulo http do Node.js
const http = require('http');

// Criar a função generica que vai responder.
// as requisições do servidor.
const tratarRespostaRequisicao = function(_, resposta) {
    resposta.writeHead(200, {'Content-Type':'text/html'});
    resposta.write("<h1>Meu primeiro Servidor Web em Node.js</h1>");
    resposta.end();
}

// Executa a funcao createServer do http que espera um tratamento 
// de requisicao/resposta e devolve um servidor.
const server = http.createServer(tratarRespostaRequisicao);

server.listen(3000, function () {
    console.log('Servidor sendo executdado na porta 3000');
})