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

/* Exercício 2:  Escreva uma função em JavaScript que receba dois números
 *  inteiros como parâmetros e retorne o maior número entre
 *  eles.
 */

function exercicio2(){
  var numero1 = prompt("Digite o primeiro número inteiro: ");  
  var numero2 = prompt("Digite o segundo número inteiro: ");

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
//exercicio2();

  /* Exercício 3: Escreva um programa em JavaScript que solicite ao
   * usuário um número inteiro positivo e exiba na tela todos os números
   * primos até esse número. 
   */

function exercicio3(){
  var numero = prompt("Digite um número inteiro positivo: ");

      if(numero === 0){
        console.log("Você digitou o número 0! Por Favor digite outro!");
        return exercicio3();
      }else if(numero<0){
        console.log(`Você digitou o número ${numero} que é negativo! Ditite um número maior que zero!`);
        return exercicio3();
      }else{
        /*Um número primo é um número inteiro maior que 1 que possui 
         * apenas dois divisores positivos: o número 1 e ele mesmo.
         */
        for(i = 2; i<=numero; i++){
          var numeroPrimo = true;

          for(divisor = 2; divisor < i; divisor++){
             if(i % divisor === 0 ){
              numeroPrimo = false;              
             } 
          }
        
            if(numeroPrimo){
              console.log(i);
            }
          }
      }
    }
    
//exercicio3();

/* Exercício 4: Escreva uma função em JavaScript que receba um array
 *de números e retorne a média aritmética desses números.
 */
 function exercicio4(){
        var numeros = [];
        
        while(numeroDigitado !== "x"){
          var numeroDigitado = prompt("Digite um número ou x para encerrar: ");
          if(numeroDigitado !== "x"){
            var soma = 0;            
            numeros.push(parseFloat(numeroDigitado));
            console.log(`Os números digitados até o momento foram: ${numeros}`);
            for(i = 0; i < numeros.length; i++){
              soma = soma + numeros[i];                            
            }
            var media = soma / numeros.length;
            console.log(`Média: ${media}`);        
            
          }
          
        }
        
 }
 exercicio4();