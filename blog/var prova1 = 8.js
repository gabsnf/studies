let prova1 = 7
let prova2 = 1
let prova3 = 8.4
let prova4 = 2.9

function media(prova1, prova2, prova3, prova4){
    let soma = prova1 + prova2 + prova3 + prova4
    media = soma / 4
    if(media > 5)
    {console.log("Voce foi aprovado")}
    else{console.log("Voce foi reprovado")}
}
media(prova1, prova2, prova3, prova4)
console.log(media.toFixed(1))