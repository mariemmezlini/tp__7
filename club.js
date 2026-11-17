const cotisation = 25.5;
let cotisationReduite = cotisation - (cotisation * 15) / 100;
console.log(cotisationReduite);
console.log(cotisationReduite.toFixed(2));
pre = prompt("votre prenom");
prenom = pre.trim();

prenomPropre = pre[0].toUpperCase() + pre.slice(1, pre.length).toLowerCase();
console.log(prenomPropre);
email = "${...}@club.tn";
p = email.includes("@");
console.log(p);
/*/exercice2/*/
const aujourdhui = new Date();
const jours = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];
const mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];
date = new Date();
jour = date.getDay();
j=date.getDate()
moi = date.getMonth();
y = date.getFullYear();
jj=jours[jour];
mm=mois[moi];
mes="nous sommes le"+" "+jj+" "+j+" "+mm+" "+y

console.log(date)
console.log(mes);
//exercice 3:
const ateliers = ["HTML", "CSS", "JavaScript", "Git"];.
console.log(ateliers.length)
console.log(ateliers[0])
console.log(ateliers[ateliers.length-1])
ateliers.push("Bootstrap")
ateliers.pop()
console.log(ateliers.includes("PHP"))
let i=1
for(const atelier of ateliers){
  console.log(i+"."+atelier)
  i++
}
console.table(ateliers);

const notes = [12, 8, 15, 10, 17, 6, 2];
console.log(notes.sort())
console.log(notes.join("-"))
console.log(notes.filter((n)=>n>=10))
console.log(notes.map((n)=>n*5))
console.log(notes.reduce((acc,n)=>acc+n,0))
/exercice4:
const membre = {
    prenom: "Sarra",
    age: 19,
    ateliers: ["HTML", "CSS"],
    cotisationPayee: false
};

console.log(membre.prenom);
console.log(membre["age"]);
membre.email = "sarra@gmail.com";
 sePresenter: function() {
        return "Je suis " + this.prenom + ", " +
        this.age + " ans, inscrite à " +
        this.ateliers.length + " ateliers : " +
        this.ateliers.join(", ") + ".";
    }

console.log(membres.map(m => m.prenom));
console.log(membres.filter(m => m.cotisationPayee === false).map(m => m.prenom));
const membre = membres.find(m => m.prenom === "Yasmine");
console.log(membre);
console.log(membre.age);
console.table(membres);
/exercice 5: