function velocidade(max, min) {
    if(max == 180 && min ==40) {
        console.log("velocidade permitida!")
    } else {
        console.log("Essa velocidade não permitida!")
    }
}

exports.resultado = velocidade;