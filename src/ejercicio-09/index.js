const color= new Set()
color.add('verde')
color.add('violeta')
color.add('naranja')
color.add('verde')
color.add('azul')
color.add('rosa')
console.log('Colores en el Set:', color)
const comprobarColor='rojo'
console.log(`${comprobarColor} existe en el Set? ${color.has(comprobarColor)}`)

