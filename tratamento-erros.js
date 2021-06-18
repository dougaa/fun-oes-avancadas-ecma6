/*
console.log(name)
const name = 'douglas'
console.log('continue')

erro porque as constantes nao possuem propiedades de hoisting
entao vamos usar o try-catch para tratar o erro

*/

try {
    console.log(name)
    const name = 'doug'
} catch (error) {
    console.log('error : ',error)
    
}
console.log('Ele emitiu a mensagem porem executa essa mensagem')