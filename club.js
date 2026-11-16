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
console.log(l=ateliers.length)
console.log(pe=ateliers[0])
console.log(pl=ateliers[l-1])
console.log(ateliers.push("Bootstrap"))
console.log(ateliers.pop())
console.log(ateliers.includes("PHP"))
for(const atelier of ateliers){
  console.log(atelier)
}
const notes = [12, 8, 15, 10, 17, 6, 2];
console.log(notes.sort())
console.log(notes.join("-"))
console.log(notes.filter((n)=>n>=10))
console.log(notes.map((n)=>n/100))
console.log(notes.reduce((acc,n)=>acc+n,0))
