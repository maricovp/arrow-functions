/* Escreva uma arrow function chamada ehPalindromo que recebe uma 
string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela 
pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para 
a esquerda) e false caso contrário. */
const ehPalindromo = (string) => {
   
    const strLimpa = string.toLowerCase().replace(/\s/g, '');
   
    return strLimpa === strLimpa.split('').reverse().join('');
  };
  
 
  console.log(ehPalindromo("ovo")); 
  console.log(ehPalindromo("arara")); 
  console.log(ehPalindromo("cachorro")); 
  