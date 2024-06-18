/*Professor, fui atrás de outra maneira para consertar as colchetes no terminal, achei essa solução*/
var vI = [27, 10, 3, 0, 20, 5, 6, 3, ]

var pares = [] 
var impares = []
vI.push(29,1)
console.log(vI.join(','));
/*Usamos o .join(','), porque mesmo se retirar com*/ 


for (let i = 0; i<= vI.length; i++){
    if(vI[i] % 2 == 0){
        pares.push(vI[i])
       
    }else{
        impares.push(vI[i])
      
    } 
}
console.log(`${pares}`)
 console.log(`${impares}`)