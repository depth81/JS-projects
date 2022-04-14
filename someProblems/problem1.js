function validBracketSequence(sequence){
    let myArray = [];
    for(i=0; i<sequence.length; i++){
        let char = myArray[myArray.length-1]
        if(sequence[i]=="(" || sequence[i]=="{" || sequence[i]=="[") {
            myArray.push(sequence[i])
        }else if((char =="(" && sequence[i] == ")") ||
            (char == "{" && sequence[i] == "}") || 
            (char == "[" && sequence[i] == "]")){
                myArray.pop();
        }else return false
    }
    //empty
    return myArray.length ? false : true
}


console.log(validBracketSequence("[((])]"))
