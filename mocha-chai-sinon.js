/*
º MOCHA 
serve para executar seus testes js tanto em node quanto no browser

inicia o projeto com npm init -y
intala as dependencias do mocha com 
npm i --save-dev mocha

/*describe('Math class', function() {
    it('Sum two numeros', function(){

    })
})
//o primeiro a se fazer é usar uma função onde tem 2 argumentos. o primeiro é o que vc está testando
//nesse caso testar a class chamada Math. e a funçao onde os testes serão escritos
//dentro da describe posso usar a função it( para descrever o comportamento esperado)
//Para testar e validar esses comportamentos, primeiro importamos uma função chamada assert que é nativo do node
// e importar nossa classe chamada math que vamos criar


const assert = require('assert')
const Math = require('../src/math.js').default

describe('Math class', function() {
    it('Sum two numeros', function(){
        //aqui escrevo o comportamento esperado
        const math = new Math()
        assert.equal(math.sum(5, 5), 10)
    })
})
npm run test

> fun-oes-avancadas-ecma6@1.0.0 test
> mocha
  Math class
    1) Sum two numeros
  0 passing (8ms)
  1 failing
  1) Math class
       Sum two numeros:
     TypeError: Math is not a constructor
      at Context.<anonymous> (test/math.spec.js:19:22)
      at processImmediate (node:internal/timers:464:21)

vemos que o teste foi feito porem nao passou e descreve o erro e para testar vamos usar o try - catch



const assert = require('assert')
const Math = require('../src/math.js')

describe('Math class', function() {
    it('Sum two numeros', function(){
        const math = new Math()
        try {
            assert.equal(math.sum(5, 5), 10)
            
        } catch (err) {
            console.log(err)
        }
    })
})

// ao executar o codigo ele passa no teste porem mostra um err (mensagem de erro assertion)
// que o argumento atual está indefinido e o esperado é 10 na operaçao logica ==


generatedMessage: true,
code: 'ERR_ASSERTION',
actual: undefined,
expected: 10,
operator: '=='
}
  ✔ Sum two numeros


1 passing (39ms)

na nossa classe Math resolvemos a funsao para corrigir o erro

class Math{
    sum = function sum() { }} module.exports = Math

    //fazendo a operação de soma

class Math{
    sum = function sum(a, b) {
       return a + b
    }
}
module.exports = Math

e agora o codigo passou sem erro


//agora converto meu codigo em assyncrono com
class Math{
    sum(a , b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 0)
       
    }
}
module.exports = Math

//
describe('Math class', function() {
    it('Sum two numeros', function(){
        const math = new Math()
        math.sum(5, 5, (value => {
            assert.equal(value, 10)
        }))
              
    })
})

// quando mudamos o valor no teste assyncrono ele vai continuar passando
porem vai disparar o erro que nao teve o resultado esperado

para resolver usamos o metodo done dentro do it e ele agora vai falhar o teste
o done garante que ele vai aguardar o promise ou async await etc para executar o teste
porém mesmo que o teste assyncrono está funcionando

quando alteramos o setTimeOut para ex 2500 dá erro

 Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; 
 if returning a Promise, ensure it resolves

 porque excede o tempo limite de teste no mocha de 2000 ms

basta usar o metodo this.timeout dentro da function no escopo de it() e especificar um valor maior

por isso usamos arrow function! para que o teste seja executado em it() ja que describe() nao tem teste sendo executado

se queremos focar na execução de somente um teste podemos usar o metodo it.only()

hooks exemplo beforeEach
garante que antes de cara iteraçao it() ele execute a função beforeEach



*/


