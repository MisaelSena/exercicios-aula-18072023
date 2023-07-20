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

  //exercicio1();

/*Exercício 2:  Escreva uma função em JavaScript que receba dois números
 *  inteiros como parâmetros e retorne o maior número entre
 *  eles.
 */

function exercicio2(){
  var numero1 = prompt("Digite o primeiro número: ");  
  var numero2 = prompt("Digite o segundo número: ");

      if(numero1 == Math.floor(numero1) && numero2 == Math.floor(numero2)){
          if(numero1>numero2){
            console.log(`O número ${numero1} é maior que o número ${numero2}!`);
          }else if(numero1<numero2){
            console.log(`O número ${numero2} é maior que o número ${numero1}!`);
          }else{
            console.log(`Os números digitados são iguais!`);
          }
      }else{
          console.log("Os números digitados devem ser inteiros!");
          return exercicio2();
      }
}
exercicio2();