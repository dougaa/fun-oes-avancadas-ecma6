/*forma tradicional de criar a função
function log(value) {
/   console.log(value);
}
log('test');
*/

/* //outra forma com funçoes anonimas, omitindo os nomes para funçao
var log = function(value) {
    console.log(value)
}
log('test')



var soma = function( a , b) {
    return a + b
}
console.log(soma(5 , 5))
*/
// Arrow function do ECMA6 =>

/*



var soma = (a , b) => a + b
console.log(soma(5,7))

var createObj = () => ({test: 123});
console.log(createObj());


//funçoes construtoras nao retornal nada quando se usam em Arrow functions

function Car() {
    this.foo = 'bar'
}
console.log(new Car())

// em arrow function nao é possivel fazer hoisting da função, ex:

log('teste')

var log = value ={
    console.log('value')
}

//Default functions arguments
defino valores por default aos argumentos para caso os 
valores nao sejan mensionados posteriormente
function soma(a = 2, b = 1){
    return a + b
}
console.log(soma(1))

//lazi evaluation

para gerar numeros randomicos e usar quando a argumento nao for passado!



function randomNumber(){
    return Math.random() * 10
}
function multiplicar(a , b = randomNumber()){
    return a * b
}
console.log(randomNumber(5))



//Enhanced object literals

//forma tradicional de criar um obj com propiedades
var obj = {
    propiedade1: "este obj tem essa propiedade"
}
console.log(obj)

//outra forma de criar o obj com as propriedade
var propiedade1 = "este objeto tem essa propriedade"
var obj = {
    propiedade1: propiedade1
}
console.log(obj)




let nome = "douglas"
let idade = "39"
let sexo = "masc"

let pessoa = {
    nome,
    idade,
    sexo
    
}
console.log(pessoa)

//invocando um metodo

function metodo(){
    console.log("aqui esta o metodo")
}

var objeto = {
    metodo
}
objeto.metodo()

var objeto = {
    soma: function soma(a, b) {
        return a + b
    }
}
console.log(objeto.soma(3, 6))

//nao necesita especificar la function en ecma6

var objeto = {
    soma(a, b) {
        return a + b
    }
}
console.log(objeto.soma(2, 5))


//criar um objeto com uma propieadade e um valor

varpropname = "teste"
var obj = {}
obj[propname] = 'valor

console.log(obj)

no ecma 6 faço essa mesmafunção assim

var propname = "teste"
var obj = {[propname]: 'valor'}
console.log(obj)




var obj = {

    sleep: function() {
  
      setTimeout(() => {
  
        console.log(this);
  
      }, 1000);
  
    }
  
  }
  
  
  
  obj.sleep();

  

  //aplicando conceitos REST, SPREAD, OPERATOR, DESTRUCTURING
      Funções avançadas do ES6
    Aprenda o que é e como trabalhar com Arrow Functions
    Default Function Arguments
    Enhanced Object Literals
    Certifique seu conhecimento


Aplicando conceitos Rest, Spread Operator e Destructuring


    Conheça Rest e Spread Operator
    Como usar Destructuring em ReactJS
    Certifique seu conhecimento

3
Introdução a Generators


    Symbols e Iterators
    Aprenda sobre Generators e onde utilizá-los
    Certifique seu conhecimento

4
Aplicando conceitos Promises e Fetch


    Introdução da aula
    Callbacks e Promises
    Fetch, Async/Await e EventEmitter
    Aplicando e praticando os conceitos
    Certifique seu conhecimento

5
Conceitos aplicados a qualidade de código e automação de testes em JS


    Introdução e conceitos da aula
    Testes, TDD e BDD
    Conheça Mocha, Chai e Sinon
    Veja como trabalhar com Chai - uma excelente biblioteca
    Desenvolvendo códigos com Sinon
    Certifique seu conhecimento

6
Tratamentos e exceções



//// REst operator

  usando operadores com Ns argumentos

  forma tradicional
 
function soma(a, b){
    var valor = 0
    for (var i =0; i < arguments.lenght; i++) {
        valor += arguments[i]
    }

    return valor
}

console.log(soma(5, 5))
 

//usando metodo reduce em array para isto



function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(soma(3,2,5,6,7,8,))
  

podemos tambem esta usando os argumentos de uma outra função

const multiplicar = (...args) => args.reduce((acc, value) => acc * value, 1)
const soma = (...rest) => {
    return multiplicar.apply(undefined, rest)
}
console.log(soma(2,3,4,5,6,7,8))


///spread operator

funciona com strings, arrays, objetos literais e iteraveis




/// GENERATOR 

sao funçoes com pausa
pode-se usar generator como forma de construir iteradores



function* numeros() {
    let number = 0
    while (true) {
        yield number
        number++
    }
}
const it = numeros()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())



const uniqueId = Symbol
Symbol.iterator
const obj = {
    values: [1,2,3,4,5],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}

for (let value of obj) {
    console.log(value)
}

*/





