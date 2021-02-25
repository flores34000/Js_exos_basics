let number = prompt("De quel nombre veux-tu calculer le factorielle ?")

function factorial (nbr){
    if (nbr==0 || nbr==1){   //le factoriel de 0 et 1 = 1
      return 1;
    }
    return factorial(nbr-1)*nbr; 
  };

  console.log(`Le resultat est : ${factorial(number)}`);