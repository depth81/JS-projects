document.addEventListener("load", resetCells);

const battleField = document.getElementById("myTable");
const tds = document.getElementsByTagName("td");

battleField.addEventListener("click", MarkTheField);

let winner = "";
let clickCount = 0;
let alreadyMarked = [];

function resetCells(){
    for (let cell of tds){
        cell.innerText = "";
        cell.classList.remove("turnToRed");
        alreadyMarked =[];
        clickCount = 0;
        winner = "";
    }
}

function MarkTheField(e){
    
    const targetTD = e.target;
    const id = e.target.id;

    if(clickCount <= 8){
        if(!alreadyMarked.includes(id)){
            if(clickCount % 2 === 0){
                tds[id].classList.toggle("turnToRed");
                targetTD.innerText="X";
            }else{
                targetTD.innerText="O";
            }
            clickCount+=1;
        }else{
            alert("You CAN'T change the value!!!");
        }
        
        alreadyMarked.push(id);
        setTimeout(function(){ verification(tds);}, 500);

    }


}//END MarkTheField()


function verification(cells){   

    //Horizontal check
    for(let j=0; j<9; j+=3){
        if(cells[j].innerText != "" && cells[j+1].innerText != "" && cells[j+2].innerText != ""){
            if((cells[j].innerText === cells[j+1].innerText) && (cells[j+1].innerText === cells[j+2].innerText)){
                winner = cells[j].innerText;
                if(winner != ""){break;} 
            }
        }
        
    } 

    //Vertical check
    if(winner === ""){
        for(let j=0; j<3; j++){
            if(cells[j].innerText != "" && cells[j+3].innerText != "" && cells[j+6].innerText != ""){
                if((cells[j].innerText) && (cells[j].innerText === cells[j+3].innerText) && (cells[j+3].innerText === cells[j+6].innerText)){
                    winner = cells[j].innerText;
                    if(winner != ""){break;} 
                }
            }
        }
    }

    //Diagonal check
    if(winner === ""){
        if(cells[0].innerText != "" && cells[4].innerText != "" && cells[8].innerText != ""){
            if((cells[0].innerText === cells[4].innerText) && (cells[4].innerText === cells[8].innerText)){
                winner = cells[4].innerText; 
            }
        }
    }
    
    if(winner === ""){
        if(cells[2].innerText != "" && cells[4].innerText != "" && cells[6].innerText != ""){
            if((cells[2].innerText === cells[4].innerText) && (cells[4].innerText === cells[6].innerText)){
                winner = cells[4].innerText;
            }
        }
    }

    //Game's result
    if(winner != ""){
        alert(winner + " wins!!!");
        resetCells();
    }else{
        if(clickCount<9){
            return;
        }else{
            alert("Cat's Game!");
            resetCells();
        }
    }

}

