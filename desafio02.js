


function calculateRank(victory,defeat,elo) {
    let balance = victory-defeat

    if (balance<10) {
        elo = "ferro"
    }
    
    else if (balance>10 && balance<=20) {
        elo = "Bronze"
    }
    
    else if (balance>20 && balance<=50) {
        elo = "Prata"
    }
    else if (balance>51 && balance<=80) {
        elo = "Ouro"
    }
    else if (balance>80 && balance<=90) {
        elo = "Diamante"
    }
    else if (balance>90 && balance<=100) {
        elo = "Lendário"
    }
    else{
        elo = "Imortal"
    }
    return `O Herói tem de saldo de ${balance} está no nível de ${elo}`
}

console.log(calculateRank(30,2));