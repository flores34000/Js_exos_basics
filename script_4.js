const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
let array7080 = []
let nameEntrepreneur = []



console.log("Voici les entrepreneurs nés dans les années 70:")
console.log("");
  for(let i in entrepreneurs){
      if (entrepreneurs[i]["year"]>=1970 && entrepreneurs[i]["year"]<=1980){
          array7080.push(entrepreneurs[i])
          console.log(entrepreneurs[i]["year"])
      }
  }
  console.log("");
  console.log("");
  console.log("Voici le nom et le prénom")
  console.log("");
  for(let i in entrepreneurs){
    nameEntrepreneur.push(entrepreneurs[i]["first","last"])
    console.log(`${entrepreneurs[i]["first"]} ${entrepreneurs[i]["last"]}`)
    }
console.log("")
console.log(""); 
console.log("Age des entrepreneurs en 2021")
console.log(""); 
for(let i in entrepreneurs){
    console.log(`${entrepreneurs[i]["first"]} ${entrepreneurs[i]["last"]} feras ${2021-entrepreneurs[i]["year"]} en 2021`)
    }

console.log("")
console.log("");  
console.log("Les entrepreneurs par ordre alphabetique:")

console.log("");  

for(let i in entrepreneurs){
    
     entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0)); 
    console.log(`${entrepreneurs[i]["last"]}`)

}