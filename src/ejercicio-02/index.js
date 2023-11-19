const persona={
    nombre:'Andrea',
    greet: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}
persona.greet()
const persona1={
    nombre:'Pedro',
    greet:()=>{
        console.log(`Hola, soy ${this.nombre}`)
    }
}
persona1.greet()