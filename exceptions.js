var instruments = ["guitar", "bass", "drums", "keyboard", "flute"];

let convertedArray = JSON.stringify(instruments);

function reverseJsonArray(input){
    
    isValidJSON(input);

    function isValidJSON(arg) {
        try {
            JSON.parse(arg);
        } catch {
            return false;
        }
    }

    if(input === undefined || typeof input === "boolean" || typeof input === "object" || typeof input === "number" || typeof input === "function" 
    || typeof input === "bigint" || typeof input === "symbol"){
        return false;
    }
    else{ 
        try{
            let originalArray = JSON.parse(input);
            if(Array.isArray(originalArray)){
                let reversedArray = originalArray.reverse();
                return JSON.stringify(reversedArray);
            }else{
                return false;
            }  
        }
        catch(e){
            return false;
        }
    }      
}

/** TESTS */

let finalArray;

//1. Without any arguments
finalArray = reverseJsonArray();
console.log(finalArray);

//2. With a boolean as the argument
finalArray = reverseJsonArray(true);
console.log(finalArray);

//3. With an Array (non-stringified) as the argument
finalArray = reverseJsonArray(instruments);
console.log(finalArray);

//4. With a string argument that is not properly formatted JSON
finalArray = reverseJsonArray('{"foo": 1,}');
console.log(finalArray);

finalArray  = reverseJsonArray('[1, 2, 3, 4,]');
console.log(finalArray);

//5. With a stringified-array that only has one value
let simpleArray = ["1"];
let convertedArray1 = JSON.stringify(simpleArray);
finalArray = reverseJsonArray(convertedArray1);
console.log(finalArray);

//6. With a stringified-array that is empty
let emptyArray = [];
let convertedArray2 = JSON.stringify(emptyArray);
finalArray = reverseJsonArray(convertedArray2);
console.log(finalArray);

//7. With a stringified-array that has an even-number of values
let evenArray = ["mountain", "lake", "sky", "Sea"];
let convertedArray3 = JSON.stringify(evenArray);
finalArray = reverseJsonArray(convertedArray3);
console.log(finalArray);

//8. With a stringified-array that has an odd-number of values
let oddArray = ["mountain", "lake", "sky", "Sea", "Ocean"];
let convertedArray4 = JSON.stringify(oddArray);
finalArray = reverseJsonArray(convertedArray4);
console.log(finalArray);

finalArray = reverseJsonArray({a:1, b:2});
console.log(finalArray);

finalArray  = reverseJsonArray(convertedArray);
console.log(finalArray);

finalArray = reverseJsonArray('["a","b","c"]');
console.log(finalArray);

finalArray = reverseJsonArray(123);
console.log(finalArray);

finalArray = reverseJsonArray('[1, 2, 3, 4]');
console.log(finalArray);