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
