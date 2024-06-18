let nota1
let nota2

console.log('Digite a Primeira nota:')
process.stdin.once('data', function(data) {
    nota1= parseFloat(data.toString().trim())
    console.log('Digite a segunda nota:')
    process.stdin.once('data', function(data) { 
        nota2= parseFloat(data.toString().trim())

        processamento(nota1, nota2) 
        process.exit()
       
    })
})
function processamento(nota1, nota2){
    var media =(nota1 + nota2) /2
    console.log (`A média é igual a: ${media}`)
}