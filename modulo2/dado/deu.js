var resposta 

console.log('Quantos lados tem o seu dado?')
process.stdin.once('data', function(data){
    resposta = data.toString().trim() 
    console.log('Eu escolho...hmm..' + Math.floor(Math.random() * resposta +1))
    process.exit()
})
