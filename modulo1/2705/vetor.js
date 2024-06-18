let vetor = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]
let impares = []

for (let i = vetor[0]; i<= vetor.length ; i++) {
    if( i % 2 ==0){
    } else {
        impares.push(i)
    }
}
console.log(impares)