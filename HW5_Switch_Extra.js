
/*** 

Extra Credit:

Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value

For example if someone calls:

timeAdder(20,"hours",4,"hours")

You could return: [1,"day"] rather than [24,"hours"]

But if they called

timeAdder(20,"hours",5,"hours")

You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours. 

***/


let intervalOfTime = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"]


/*** FUNCTION toMaxLabel() ***/

function largestLabel(seconds){

    let time = seconds;

    if(time % 86400 === 0){

        if(time / 86400 === 1){

            return [1, "day"]

        }else{

            return [time / 86400, "days"]

        }

    }else if(time % 3600 === 0){

        if(time / 3600 === 1){

            return [1, "hour"]

        }else{

            return [time / 3600, "hours"]

        }

    }else if(time % 60 === 0){

        if(time / 60 === 1){

            return [1, "minute"]

        }else{

            return [time / 60, "minutes"]

        }

    }else{

            return [time, "seconds"]

        }
        
}


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
                                let timeAdded = largestLabel(totalSec);
                                return timeAdded;
        
                            }
                            
                        }
                        else{//value2 > 1
                            
                            if(label2.endsWith("s")){
        
                                //Call toSec()
                                let num1 = toSec(value1,label1);
                                let num2 = toSec(value2,label2);
                                let totalSec = num1 + num2;
                                let timeAdded = largestLabel(totalSec);
                                return timeAdded;

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
                                let timeAdded = largestLabel(totalSec);
                                return timeAdded;
            
                            }
            
                        }else{//value2 > 1
            
                            if(label2.endsWith("s")){
            
                                //Call toSec()
                                let num1 = toSec(value1,label1);
                                let num2 = toSec(value2,label2);
                                let totalSec = num1 + num2;
                                let timeAdded = largestLabel(totalSec);
                                return timeAdded;
            
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
console.log(timeAdder(60, "seconds", 60, "seconds"))
console.log(timeAdder(86400, "seconds", 86400, "seconds"))
console.log(timeAdder(1, "second", 1, "second"))
console.log(timeAdder(20, "hours", 4, "hours"))
console.log(timeAdder(20, "hours", 5, "hours"))
console.log(timeAdder(1, "second",118, "seconds"))
console.log(timeAdder(1, "day", 118, "seconds"))
console.log(timeAdder({},"days",5,"minutes"))
console.log(timeAdder(2,"days",[],"minutes"))
console.log(timeAdder("","days",[],"minutes"))
console.log(timeAdder(" ","days",2,"minutes"))
console.log(timeAdder(16,"hours",2,"minutes"))
console.log(timeAdder(23,"hours",59,"minutes"))
console.log(timeAdder(23,"hours",1500,"minutes"))



