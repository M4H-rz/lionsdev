var somaPares =0
var somaImpares =0
var totalPares =0
var totalImpares =0
var mediaPares =0
var mediaImpares =0
var i



    for(i=0; i<1000; i++){
        if  ( i % 2 == 0){
            somaPares += i
            totalPares++
        }else {
            somaImpares += i
            totalImpares++
        }
}
{
    console.log(`A soma dos pares é ${somaPares}`)
    console.log(`O total de números pares é  ${totalPares}`)
    console.log(`A soma dos impares é ${somaImpares}`)
    console.log(`O total de números impares é ${totalImpares}`)
  }      
   mediaPares = somaPares/totalPares
   mediaImpares =somaImpares/totalImpares
   console.log(`A média dos Pares é ${mediaPares}`)
   console.log(`A média dos Impares é ${mediaImpares}`)
   
   if(mediaPares>mediaImpares){
    console.log('O total de números pares é maior do que o total de números ímpares!')
   } else{
    console.log('O total de números ímpares é maior do que o total de números pares!')

   }

