let serine = ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"];
let proline = ["CCU", "CCC", "CCA", "CCG"];
let leucine = ["UUA", "UUG"];
let phenylalanine = ["UUU", "UUC"];
let arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"];
let tyrosine = ["UAU", "UAC"];

let arn = "UUACGCAGUAGA";

let arnSepar = arn.match(/.{1,3}/g);
console.log(arnSepar);

let resultat = [];

arnSepar.forEach((codon) => {
  if (serine.includes(codon)) {
    resultat.push("serine");
  } else if (proline.includes(codon)) {
    resultat.push("proline");
  } else if (leucine.includes(codon)) {
    resultat.push("leucine");
  } else if (phenylalanine.includes(codon)) {
    resultat.push("phenylalanine");
  } else if (arginine.includes(codon)) {
    resultat.push("arginine");
  } else if (tyrosine.includes(codon)) {
    resultat.push("tyrosine");
  }
});

console.log(resultat);
