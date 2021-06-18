function umaCoisa(callback) {
    setTimeout(function() {
        callback('primeiro dado')
    },1000)
}

function outraCoisa(callback) {
    setTimeout(function() {
        callback('segunda dado')
    },1000)
}

function tudo(){
    umaCoisa(function(dados){
        var dadoprocessado = dados.split('')
        outraCoisa(function(dados2){
            var dadoprocessado2 = dados2.split('')

            setTimeout(function(){
                console.log(dadoprocessado, dadoprocessado2)
            },1000)

        })
    })
}
tudo()