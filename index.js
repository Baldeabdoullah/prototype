const obj = {
  pseudo: "From scratch",
  ville: "Bordeaux",
  admin: false,
  direBonjour: function () {
    console.log("bonjour je suis " + this.pseudo);
  },
  //   direBonjour() {
  //     console.log("bonjour je suis " + obj.pseudo);
  //   },
};

// Ajouter
obj.age = 24;
obj["admin"] = true;

//Modifier
obj.pseudo = "Fs";

//supprimer
// delete obj.ville;

// obj.age = 32;
// console.log(obj);

// checker si une propriete existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir un objet
for (const key in obj) {
  //console.log(key + " : " + obj[key]);
}

//console.log(obj.direBonjour());

//obtenir les clees
const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeures
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

//fussionner Objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//Empecher les modifications
//const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "42 rue du code";

// console.log(newObj);

//-------------
//Construire des objets
//--------------

// fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite a " + this.ville);
  };
}

const user1 = new User("From scratch", "Paris");
const user2 = new User("Denis", "Nantes");
//console.log(user2.getCity());

//------------------------------------
//Factory fonctions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("FS", "nice");
console.log(user4);

//---------------------------
//Les class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("samia", "Lyon");

Utilisateur.prototype.sayCity = function () {
  console.log("j'habite a " + this.ville);
};

console.log(user5);

Object.assign(Utilisateur.prototype, {
  method1() {
    //ma methode
  },
  method2() {
    //ma methode
  },
});
