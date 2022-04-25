/* All men are mortal
Socrates is a man.
Therefore, socrates is mortal. */

//All P's are Q. R is a P. Therefore, R is Q.

let men = ["Heraclitus","Plato","Socrates","Aristotle"];
var areAllMenMortal = true;

if(areAllMenMortal) {
  console.log("All men are mortal");

  // Checking if Socrates is a man
  
  if(men.indexOf("Socrates") >= 0) {
    console.log("Socrates is a man");
    console.log("Therefore, Socrates is mortal");
  }else {
    console.log("This guy is not Socrates but is mortal");
  }
  
}

/************************************************************************/
/* This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla. */

let flavors = ["Chocolate", "Vanilla"]
let isChocolate = false;
let isVanilla = true;

if(flavors){
  console.log("This cake is either vanilla or chocolate.")
  if(!isChocolate){
    console.log("This cake is not chocolate.");
    console.log("Therefore, this cake is vanilla.");
  }
}
