let n1
let n2
let calculo
let resultado

function calculadora(n1, n2, calculo){
if (calculo == '+'){
    resultado = n1 + n2
    return resultado
}else if (calculo == '-') {
    resultado = n1 - n2
    return resultado
}else if (calculo == '/') {
    resultado = n1 / n2 
     return resultado
}else if (calculo == '*'){
    resultado = n1 * n2
    return resultado
}}


console.log(calculadora(50, 2, '-'))