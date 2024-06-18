var nota
var classificar
var resultado

console.log('Digite uma nota')
process.stdin.once('data', function (data){
    nota = data.toString().trim()
    console.log(classificacao(nota))
    process.exit()
})

function classificacao(nota){
switch (true) {
    case (nota<=59) :
     
    return 'F'
    case (nota>=60 && nota<=69):
     
    return 'D'
    case (nota>=70 && nota<=79):
     
     return 'C'
    case (nota>=80 && nota<=89):
     
      return 'B'
    case (nota>=90 && nota <= 100):
      return  'A'
    }
}
