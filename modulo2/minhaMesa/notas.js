let notas =[]
let prova1
let prova2 

console.log('Digite uma nota')
process.stdin.once('data', function(data){
        prova1 = parseFloat(data.toString().trim())
        console.log('Digite uma outra nota')
        process.stdin.once('data', function(data){
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
        })
})
function processamento(prova1, prova2){
    notas.push(prova1)
    notas.push(prova2)
    let media = (notas[0]+ notas[1]) /2
    console.log(`A média é ${media}`)
}