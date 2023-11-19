function suma(...num){
    return num.reduce((total,num)=> total +num,0)
}
const resultado=suma(45,22,57,85,11)
console.log(`La suma es: ${resultado}`)
