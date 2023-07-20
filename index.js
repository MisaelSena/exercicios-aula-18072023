const prompt = require("prompt-sync")();

/* Exercício 1: Escreva um programa em JavaScript que solicite
 * ao usuário um número inteiro e exiba na tela se o
 * número é par ou ímpar. */

function exercicio1(){
  var numero = prompt("Digite o número: ");

  var modulo = numero % 2;

    if(modulo === 0){
      console.log("O número " + numero +" é par");
    }else{
      console.log("O número " + numero +" é ímpar");
    }  
  }

  exercicio1();