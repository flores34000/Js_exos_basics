const books = [
    { title: "Gatsby le magnifique", id: 133712, rented: 39 },
    { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
    { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
    { title: "Les frères Karamazov", id: 450911, rented: 55 },
    { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
    { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
    { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
    { title: "Le meilleur des mondes", id: 88847, rented: 58 },
    { title: "La disparition", id: 364445, rented: 33 },
    { title: "La lune seule le sait", id: 63541, rented: 43 },
    { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
    { title: "Guerre et Paix", id: 748147, rented: 0 },
];

console.log("");
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
console.log("");
for (let i in books) {
    if (books[i]["rented"] === 0) {
        console.log(`${books[i]["title"]} n'a pas était emprunté`);
    } else {
        console.log(
            `On a emprunté ${books[i]["title"]} ${books[i]["rented"]} fois`
        );
    }
}

console.log("");
console.log("");

books.sort((a, b) => b.rented - a.rented);
console.log(
    `Le livre le plus emprunté est ${books[0]["title"]}, il a eté emprunté ${books[0]["rented"]}`
);

console.log("");
console.log("");

books.sort((a, b) => a.rented - b.rented);
console.log(
    `Le livre le moins emprunté est ${books[0]["title"]}, il a eté emprunté ${books[0]["rented"]}`
);

console.log("");
console.log("");

console.log("Trouve le livre avec l'ID: 873495");

for (let i in books) {
    if (books[i]["id"] === 873495) {
        console.log(`${books[i]["title"]} a l'ID: 873495`);
    }
}

console.log("");
console.log("");
console.log("Supprime le livre avec l'ID: 133712");
console.log("");
for (let i in books) {
    if (books[i]["id"] === 133712) {
        books.splice(books[i], 1);
    }
    console.log(`${books[i]["title"]} id: ${books[i]["id"]}`);
}
console.log("");
console.log("");
console.log("Trie les livres par ordre alphabétique");
console.log("");

for(let i in books){
    
    books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
    console.log(`${books[i]["title"]}`)
    
}
console.log("")
console.log(`Il ne reste que ${books.length} livres`)
