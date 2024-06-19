let notas = [7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0]
var soma = 0

for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}
let media= soma/notas.length
let max= notas[0]
let min= notas[0]

for(let i = 1; i<notas.length; i++){
    if(notas[i]> max){
    max = notas[i]
    }
 if (notas[i]< min){
        min = notas[i]
    }
}
var reprovados = 0
var acima = 0 

for(let i = 0; i< notas.length; i++){
    if(notas[i]> 6){
        acima++
    }else{
        reprovados++
    }
    
}
notas.push(8.0)
console.log(`Média: ${media}`)
console.log(`Nota máxima: ${max}`)
console.log(`Nota minima: ${min}`)
console.log(`Acima da média: ${acima}`)
console.log(`Reprovados: ${reprovados}`)

