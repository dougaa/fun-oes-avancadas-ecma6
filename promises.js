/*const filmes = [{
    id:1,
    title: 'ironman',
    year: '2008'
},{
    
        id:1,
        title: 'emmanuele',
        year: '1970'
},
{
    id:1,
    title: 'xuxa',
    year: '2000'
}]

// agora criamos uma função que retorna esses dados
/*
const getDatos = () =>{
    return filmes
}
console.log(getDatos())
*/
// ele retorna os datos syncronos, todos ao mesmo tempo
// para manipular essa sincronia usamos a função setTimaout

/*
const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(filmes) 
    }, 1500)
})

}
getDatos()
    .then((filmes) => console.log(filmes))

//aqui estou usando o metodo .then para retornar os filmes
// se nao retornar nada posso usar o metodo .cath para mostrar erro

*/

//outra forma de fazer isso seria

const filmes = []
const getDatos = () => {
    return new Promise((resolve, reject) => {
        if(filmes.length === 0) {
            reject(new Error('dados nao existem'))
        }
        setTimeout(() => {
        resolve(filmes) 
    }, 1000)
})
}
//usar a lavra reservada await para armazenar os dados dentro de uma variavel

/*
const datosFilmes = await getDatos()
console.log(filmes)
*/
// porem nos vai dá o erro //SyntaxError: await is only valid in async functions
//porque a await é asyncrono e so pode ser usado dentro de uma função asyncrona
//criamos uma função e movemos pra dentro

async function listFilmes() {
    try {
        const lista = await getDatos()
        console.log(lista)
    
      }  catch (err) {
        console.log(err.message)

    }

} 
listFilmes()