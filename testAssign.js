let a = {
    nombre:'Carlos',
    edad: 25
}
console.log(a)
Object.assign(a, {edad:30})
console.log(a)

let b = {...a, edad:40}
console.log(b)

let listaClases = ['InputForm mt-3', 0 ? 'otraClase':'invalidForm'].join(' ')
console.log(listaClases)

let montoForulario = '12.26'
console.log(Number.isNaN(+montoForulario))

console.log(Number.isInteger(+montoForulario))

if(Number.isNaN(+montoForulario)) {
    console.log('Invalid Form')
}else{
    console.log('Valid Form')
}

//console.log(Date.now().toString(36))
