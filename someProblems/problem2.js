function HowManyTimesIsOneStringInsideAnother(a, b){

    patternLength = a.length;
    searchLength = b.length;

    // Step 1. Use the split() method to return a new array
    var splitString = a.split(""); 

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); 

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    
    let CountOccurrencesOfjoinArray = 0;
    let CountOccurrencesOfa = b.split(a).length - 1;

    newb = b.slice(CountOccurrencesOfa * a.length);

    if(newb.length >= a.length){
        CountOccurrencesOfjoinArray = newb.split(joinArray).length - 1; 
    }

    let totalCountOccurrence = CountOccurrencesOfa + CountOccurrencesOfjoinArray;
    console.log(totalCountOccurrence); 
    
}


HowManyTimesIsOneStringInsideAnother("ab","abababc");
HowManyTimesIsOneStringInsideAnother("a","abc");
HowManyTimesIsOneStringInsideAnother("abc","abccba");
HowManyTimesIsOneStringInsideAnother("ab","abcbcb");
HowManyTimesIsOneStringInsideAnother("abc","cvraccnakla");