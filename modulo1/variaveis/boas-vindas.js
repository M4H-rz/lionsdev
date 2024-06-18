var nome = ''
console.log("Qual é o seu nome?")
process.stdin.on('data', function(data) {
    
    let nome = data.toString();
    var saudacao = "Olá " + nome
    console.log(saudacao)
    process.exit();
})