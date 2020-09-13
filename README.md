# Calindra  Challenge


A instalação e execução é muito simples, basta executar o comando "npm i" para instalar as dependências e depois execute o comando "npm start".

Para teste, faça uma chamada via GET para a URL "http://localhost:8080/api/location/distances", passando a queryString "adresses" com o valor de dois ou mais endereços separados por ponto e virgula;

A ordem na lista pelo valor do campo "distance"  do menor para o maior, é o indicativo que as localizações mais proximas estão no começo da lista.  

Exemplo : http://localhost:8080/api/location/distances?adresses= Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200; Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro J, 22280030; Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003

