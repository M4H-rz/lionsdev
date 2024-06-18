var i
var numero

 console.log('Qual tabuada deseja?')
process.stdin.once('data', function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
    })
  function processamento(numero){
    for(i=0; i<=100; i++){
        console.log(`${numero} * ${i} = ${numero * i}`)
    }
        
  }
