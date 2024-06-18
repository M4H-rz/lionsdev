var coresFavoritas = [ 'preto',  ' azul',  ' verde']
var coresEspeciais = []
var corDoUsuario
 
console.log('Qual a sua cor favorita?')
process.stdin.once('data', function (data){
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})  
function processamento(corDoUsuario){
if (coresFavoritas.includes(corDoUsuario)){
    console.log('A sua cor é uma das mais favoritas da turma!')
}else{
    console.log('A sua cor favorita é diferente, vamos adcionar à lista!')
coresEspeciais.push(corDoUsuario)
console.log(`Temos ${coresFavoritas.length}  que são ${coresFavoritas} e  ${coresEspeciais.length} especial que é ${coresEspeciais}`) 
}
}
