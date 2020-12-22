let intervalOfTime = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"]

/*** FUNCTION toSec(). Converts every time interval to seconds and calculates de time addition, then it returns the result to timeAdder() ***/

function toSec(valueX, labelX){

    let value;

    switch (labelX) {
    case "second":
        value = 1;
        break;
    case "seconds":
        value = valueX;
        break;
    case "minute":
    case "minutes":
        value = valueX * 60;
        break;
    case "hour":
    case "hours":
        value = valueX * 3600;
        break;
    case "day":
    case "days":
        value = valueX * 86400;
        break;
    default:
        value = 0
        break;
    }

return value;

}

/*** FUNCTION timeAdder() ***/

function timeAdder(value1, label1, value2, label2){

    if(((intervalOfTime.includes(label1) && intervalOfTime.includes(label2)))){
        
        if((Number.isInteger(value1) && Number.isInteger(value2))){

            if((value1>0 && value2>0)){
        
                if(value1==1){
        
                    if(label1.endsWith("s")){//Wrong label
        
                        return false
        
                    }else{
        
                        if(value2==1){
                        
                            if(label2.endsWith("s")){//Wrong label
                                
                                return false
        
                            }else{
                                
                                //Call toSec()
                                let num1 = toSec(value1,label1);
                                let num2 = toSec(value2,label2);
                                let totalSec = num1 + num2;
                                return [totalSec, "seconds"]; 
        
                            }
                            
                        }
                        else{ //value2 > 1
                            
                            if(label2.endsWith("s")){
        
                                //Call toSec()
                                let num1 = toSec(value1,label1);
                                let num2 = toSec(value2,label2);
                                let totalSec = num1 + num2;
                                return [totalSec, "seconds"]; 

                            }else{//Wrong label
        
                                return false
        
                            }
        
                        }
        
                    }     
        
                }else{//value1 > 1

                    if(label1.endsWith("s")){

                        if(value2 == 1){
        
                            if(label2.endsWith("s")){//Wrong label
            
                                return false
            
                            }else{
            
                                //call toSec()
                                let num1 = toSec(value1,label1);
                                let num2 = toSec(value2,label2);
                                let totalSec = num1 + num2;
                                return [totalSec, "seconds"];
            
                            }
            
                        }else{//value2 > 1
            
                            if(label2.endsWith("s")){
            
                                //Call toSec()
                                let num1 = toSec(value1,label1);
                                let num2 = toSec(value2,label2);
                                let totalSec = num1 + num2;
                                return [totalSec, "seconds"]; 
            
                            }else{//Wrong label
            
                                return false
            
                            }
            
                        }

                    }else{ //Wrong label

                        return false

                    }     
        
                }
        
            }else{//value1 and_or value2 is(are) not positive integer(s)
        
                return false
        
            }
        
        }else{//is not a positive integer but another data type

            return false

        }

    }else{//labelX does not belong to timeInterval array[]

        return false

    }//END BIG if


}//END timeAdder()



/*** Some tests... ***/

let z = "Not a number"

console.log(timeAdder(1, "second", 1, "second"))
console.log(timeAdder(1, "day", 1, "day"))
console.log(timeAdder(1, "second", 2, "minutes"))
console.log(timeAdder(1, "seconds", 1, "second"))
console.log(timeAdder(1, "hour", 1, "days"))
console.log(timeAdder(2, "hour", 1, "day"))
console.log(timeAdder({},"days",5,"minutes"))
console.log(timeAdder(2,"days",[],"minutes"))
console.log(timeAdder("","days",[],"minutes"))
console.log(timeAdder(" ","days",2,"minutes"))
console.log(timeAdder(z,"days",[],"minutes"))
console.log(timeAdder(1, "second", 1, "hour"))
console.log(timeAdder(2, "minutes", 1, "hour"))
console.log(timeAdder(1, "day", 2, "minutes"))
console.log(timeAdder(1, "days", 2, "minutes"))
console.log(timeAdder(1, "days", 2, "minute"))
console.log(timeAdder(1, "second", 2, "minutes"))
console.log(timeAdder(1, "seconds", 2, "minutes"))



