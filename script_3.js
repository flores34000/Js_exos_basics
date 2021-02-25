let nbrEtage = prompt("Combien d'étages veux-tu ?");

function pyramid(nbrEtage) {
  let y = nbrEtage ;
  let x = 1;

  for (let i = 1; i <= nbrEtage; i++) {
    console.log(" ".repeat(y) + "#".repeat(x));
    y--;
    x++;
  }
}

pyramid(nbrEtage);
