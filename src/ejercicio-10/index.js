const personas= new Map()
personas.set('Amparo', 55)
personas.set('Javier', 45)
personas.set('Josito', 35)
personas.set('Lara', 25)

console.log('Edad de Amparo:', personas.get('Amparo'))
console.log(personas)

const borrarPersona='Javier'
personas.delete(borrarPersona)
console.log('personas que quedan en la lista:',personas)

