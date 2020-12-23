/* Homework Assignment #6: Loops

Details:

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. But you won't be one of those people. Here are the rules for the assignment (as specified by Imran Gory):

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz". 

!!!Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". You should print this whenever you encounter a number that is prime (divisible only by itself and one). As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. It's okay for it to be slow.

*/
function howManyDivisors(num){
    
    let divisorCount = 0;

    for(let j=2; j<=num; j++){      
        if(num % j === 0){
            divisorCount += 1;
        }
    }

    return divisorCount;
}


function FizzBuzz () {
    
    for (let i=1; i<=100; i++){
        if(i===1){
            console.log(i);
        } 
        else if(i===2){
            console.log("prime")
        }
        else{
            const numberOfDivisors = howManyDivisors(i) 
            if(numberOfDivisors<=1){
                console.log("prime"); 
            }else{
                if(i % 15 === 0){
                    console.log("FizzBuzz");
                }else if(i % 3 === 0){
                    console.log("Fizz");
                }else if(i % 5 === 0){
                    console.log("Buzz");
                }else{
                    console.log(i);
                }
            }           
        }

    }

}

FizzBuzz();