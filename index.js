let NameHero = "Homem-Sapo";
let Xp = 2001;
let LevelHero = "";

if (Xp <= 1000) {
    LevelHero = "Ferro";
} else if (Xp > 1000 && Xp <= 2000) {
    LevelHero = "Bronze";
} else if (Xp > 2000 && Xp <= 5000) {
    LevelHero = "Prata";
} else if (Xp > 5000 && Xp <= 7000) {
    LevelHero = "Ouro";
} else if (Xp > 7000 && Xp <= 8000) {
    LevelHero = "Platina";
} else if (Xp > 8000 && Xp <= 9000) {
    LevelHero = "Ascendente";
} else if (Xp > 9000 && Xp <= 10000) {
    LevelHero = "Imortal";
} else if (Xp > 10000) {
    LevelHero = "Radiante";
}

console.log("O Herói de nome " + NameHero + " está no nível de " + LevelHero);
