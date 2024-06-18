var vI = [27, 10, 3, 0, 20, 5, 6, 3, ]

var pares = [] 
var impares = []
vI.push(29,1)
console.log(`${vI}`)

for (let i = 0; i<= vI.length; i++){
    if(vI[i] % 2 == 0){
        pares.push(vI[i])
       
    }else{
        impares.push(vI[i])
      
    } 
}
console.log(`${pares}`)
 console.log(`${impares}`)

 console.log(JSON.stringify(`${notas}`));