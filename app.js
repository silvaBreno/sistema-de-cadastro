console.log("Rodando o sistema de gerenciamento de jogos");

alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;


let mensagemDeErro = 'Erro! Preencha todos os campos';

alert(mensagemDeErro);

let userName = prompt('Insira seu nome?');
let userAge = prompt('Digite a sua idade');

if (userAge >= 18) {
    alert('Pode tirar a habilitação!')
}