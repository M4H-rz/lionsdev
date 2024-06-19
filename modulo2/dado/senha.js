/*Crie um programa que gere uma senha aleatória de um comprimento especificado pelo
usuário. A senha deve conter letras maiúsculas, minúsculas e números.
Idéia:
1. Definir uma string (eu chamei de caracteres) que contém todos os caracteres possíveis
que podem compor a senha. Esta string inclui letras maiúsculas, minúsculas e números.
Não precisa ser Array.

2. Inicializar a variável senha como uma string vazia. Esta variável armazenará a senha
gerada mais tarde.

3. Utilizar o process.stdin para perguntar ao usuário o comprimento da senha desejada. A
resposta do usuário é armazenada na variável comprimentoSenha que é então convertida
para um número inteiro usando parseInt().

4. Usar um for(let i = 0; i < comprimentoSenha; i++) para gerar cada caractere da senha.
    1. Usamos Math.random() para gerar um número aleatório entre 0 e 1. Multiplicamos
    este número pelo comprimento da string caracteres e aplicamos Math.floor() para
    obter um índice inteiro aleatório dentro do intervalo de índices da string.

    2. Com esse número usamos caracteres.charAt(numeroAleatorio) para obter o
    caractere da string caracteres no índice aleatório gerado e o concatenamos à
    variável senha.

5. Depois do laço, só exibir a senha.*/

var caracteres = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
var senha = ''
var numero

console.log('Digite o comprimento da senha:')
process.stdin.once('data', function(data){
    let comprimento 
    
    for(let i = 0; i < senha; i++){
        numero = Math.floor(Math.random() * caracteres.length)
        caracteres.charAt(numero)
    }
    
})
console.log(`Sua senha é, ${senha}`)