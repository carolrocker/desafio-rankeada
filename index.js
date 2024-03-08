let resultado = saldo(100,20)

function saldo(vitorias, derrotas) {
    let pontos = vitorias - derrotas
      return pontos
}
if(resultado <=10){
    nivel = "Ferro"
}

else if(resultado > 10 && resultado <= 20){
    nivel = "Bronze"
}

else if(resultado > 20 && resultado <= 50){
    nivel = "Prata"
}

else if(resultado > 50 && resultado <= 80){
    nivel = "Ouro"
}

else if(resultado > 80 && resultado <= 90){
    nivel = "Diamante"
}

else if(resultado > 90 && resultado <= 100){
    nivel = "Lendário"
}

else if(resultado > 100){
    nivel = "Imortal"
}

console.log("O herói tem o saldo de " + resultado + " e está no nível de " + nivel)