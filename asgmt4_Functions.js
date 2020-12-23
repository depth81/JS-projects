/* All men are mortal
Socrates is a man.
Therefore, socrates is mortal. */

let things = [{name : "Plato", aMan : true, mortal : true}, {name : "Caesar", aMan : true ,mortal : true},
            {name : "Alexander", aMan : true, mortal : true}, {name : "Flipper", aMan : false ,mortal : true},
            {name : "Diamond", aMan : false ,mortal : false}, {name : "Napoleon", aMan : true ,mortal : true}]

const myVar = (x) => {
  if(typeof x != "string"){
    return "Wrong data type"
  }else if(x === ""){
    return "No name provided"
  }else{
    for(var i=0; i<things.length; i++){
      var cont = 0;
      if(things[i].name === x){
          return things[i].aMan;
      }
    }
  }
}

console.log(myVar("Diamond"));
console.log(myVar("Napoleon"));
console.log(myVar("Flipper"));
console.log(myVar("Mao"));
console.log(myVar("Caesar"));
console.log(myVar(2));
console.log(myVar(""));
console.log(myVar("Alexander")); 
console.log(myVar("Plato")); 
console.log(myVar())
console.log(myVar("Dracula"));
console.log(myVar("Socrates"));


/***********************************************************************/

/* This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla. */

let cakesFlavor = ["vanilla", "chocolate"];
let isChocolate = true;

function whichFlavorIs(flavors, isChoc){
  return isChoc ?  "The cake is " + flavors[1] :  "The cake is " + flavors[0]
}

console.log(whichFlavorIs(cakesFlavor,isChocolate))







