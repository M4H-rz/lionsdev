var n1
var n2
let calculo
let resultado
function calculadora(n1, n2, calculo){
switch (calculo) {
    case '+':
       resultado = n1 + n2
    return resultado
    case '-':
       resultado = n1 - n2
    return resultado
    case '/':
      resultado = n1 / n2 
     return resultado
    case '*':
      resultado = n1 * n2
    }
    return resultado
}
console.log(calculadora(50, 3, '-'))