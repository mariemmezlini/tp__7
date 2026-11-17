const resultats = [
{ joueur: "Sarra", score: 7 },
{ joueur: "Ali", score: 10 },
{ joueur: "Yasmine", score: 4 },
{ joueur: "Mohamed", score: 8 },
{ joueur: "Ines", score: 5 }
];
resultats.forEach(r => {
    r.pourcentage = r.score * 10;
});

console.table(resultats);


resultats.sort((a, b) => b.score - a.score);

resultats.forEach((r, i) => {
    console.log((i + 1) + ". " + r.joueur + " — " +
    r.score + " / 10 (" + r.pourcentage + " %)");
});

console.log(resultats.every(r => r.score >= 3));

console.log(resultats.some(r => r.score === 10));
console.log(resultats.find(r => r.score < 5));



const stats = {
    nbJoueurs: resultats.length,

    moyenne: Math.round(
        resultats.reduce((s, r) => s + r.score, 0) / resultats.length * 10
    ) / 10,

    meilleur: resultats[0],

    prochaineReunion: new Date(2026, 11, 15, 14, 30),

    joursRestants: Math.ceil(
        (new Date(2026, 11, 15) - new Date(2026, 10, 17)) /
        (1000 * 60 * 60 * 24)
    ),

    afficher: function() {
        console.log("Nombre de joueurs : " + this.nbJoueurs);
        console.log("Moyenne : " + this.moyenne);
        console.log("Meilleur joueur : " + this.meilleur.joueur);
        console.log("Prochaine réunion : " + this.prochaineReunion);
        console.log("Jours restants : " + this.joursRestants);
    }
};