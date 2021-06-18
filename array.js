let valores = [1.424, 1.412, 1.476, 1.694, 1.825, 1.793, 1.843, 1.690, 1.484, 1.079, 1.295]

function somar(){
    let soma = 0
    for (let i in valores) {
        soma += valores[i]
    }
    return soma
}
console.log(somar())
//Result: 17.015