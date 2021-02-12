window.addEventListener("load", landingPage);

const myDivHeader = `<div id="divHeader">
                        <h1>TO-DO-LIST</h1>
                        <h2>The to-do-list to organize work &amp; life</h2>
                    </div>`;

document.body.innerHTML = myDivHeader;
var divHeader = document.getElementById("divHeader");

var myDivContainer = `<div id="container"></div>`;
document.body.innerHTML += myDivContainer;
const divContainer = document.getElementById("container");

var btnsu = `
    <button id="btnSignUp" type="button">Sign Up</button>
`;
divContainer.innerHTML = btnsu;

var btnli = `
    <button id="btnLogIn" type="button">Log In</button>
`;
divContainer.innerHTML += btnli;

const buttons = divContainer.querySelectorAll("button");
var btnSignUp = buttons[0];
var btnLogIn = buttons[1];


/** GLOBAL VARIABLES */

var usersList = [];
var localToDoLists = [];
var passwordGlobal = ``;
var inputValue = ``;
var thisIsIt = ``;

/** FUNCTIONS */

function localStorageUsersList(uList){
    localStorage.setItem('localUsersList',JSON.stringify(uList));
    chkAgree.checked = false;
    swal({
        title: "successfully stored!",
        icon: "success",
    });
    
    divContainer.removeChild(myForm);
    dashBoard();
}

function localStorageUsersList2(uList){
    localStorage.setItem('localUsersList',JSON.stringify(uList));
    swal({
        title: "successfully modified!",
        icon: "success",
    });
}

function localStorageToDoList(tdList){
    localStorage.setItem('localToDoList', JSON.stringify(tdList));
    swal({
        title: "The TDL was successfully stored!",
        icon: "success",
    });
}

function localStorageToDoList2(tdList){
    localStorage.setItem('localToDoList', JSON.stringify(tdList));
    swal({
        title: "The TDL was successfully deleted!",
        icon: "success",
    });
}

function checkingEmail(e){

    var storedList = localStorage.getItem('localUsersList');
    
    if(storedList === null){
        usersList = [];
    }else{
        usersList = JSON.parse(storedList);
    }
    
    let index = usersList.findIndex(user => user.email === e);
    return index;
}

function verifyListUniqueName(inpName, anEmail){
    var index1 = localToDoLists.findIndex( element => (element.listName === inpName) && (element.ownerEmail === anEmail));
    return index1;
}


/**GUI */

function landingPage(){
    
    divContainer.appendChild(btnLogIn);
    divContainer.appendChild(btnSignUp);
    
    btnSignUp.addEventListener("click", signUp);
    btnLogIn.addEventListener("click", logIn);

}//END LandingPage()

function signUp(){

    const myForm = `
    <form id="myForm">
        <input type="text" placeholder="First Name" id="txtFirstName" style="display: block;"><br>
        <input type="text" placeholder="Last Name" id="txtLastName" style="display: block;"><br>
        <input type="email" id="email" placeholder="email" required="" style="display: block;"><br>
        <input type="password" id="password" placeholder="password" required="" style="display: block;"><br>
        <div id="divChkBox">
            <input type="checkbox" id="chkAgree"><label for="chkAgree">I agree to the Terms of Use</label>
        </div>
        <div id="divBtnSubmitSignUp">
            <button type="button" id="btnSubmitSU">SUBMIT</button>
            <button type="button" id="btnCLRSU">CLEAR</button>
        </div>
        <div id="divBtnHome">
            <button type="button" id="btnHome">HOME</button>
        </div>
        <div id="divQYCLR">
            <button type="button" id="btnQLS">Query LS</button>
            <button type="button" id="btnCLR">Clear LS</button>
        </div>
    </form>`;

    divContainer.innerHTML = myForm;

    const myFormJS = document.getElementById("myForm");

    var inputs = myFormJS.querySelectorAll("input");
    console.log(inputs);

    btnSubmitSU.addEventListener("click", addUser);
    btnHome.addEventListener("click", removingElementsSUHome);
    btnCLRSU.addEventListener("click", clearSignUpUserData);

    function removingElementsSUHome(){
        divContainer.removeChild(myFormJS);
        landingPage();
    }

    function clearSignUpUserData(){
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        inputs[3].value = "";
    }

    function addUser(){
        
        if(!chkAgree.checked){

            swal({
                text: "You must accept the terms of use!",
                icon: "error",
            });
        
        }else{

            if(inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "" || inputs[3].value === ""){

                swal({
                    text: "All fields are mandatory",
                    icon: "error",
                });
        
            }else{

                const fn = inputs[0].value;
                const ln = inputs[1].value;
                const em = inputs[2].value;
                const pw = inputs[3].value;
                
                emailGlobal = inputs[2].value;

                let saveToList = checkingEmail(em);

                if(saveToList !== -1){

                    swal({
                        text: "This email address already exists in our database.",
                        icon: "error",
                    });
                    
                    
                }else{
                    
                    if(pw.length<3){
            
                        swal({
                            text: "Your password must contain at least 3 characters",
                            icon: "error",
                        });
            
                    }else{

                        var newUser = {
                            fName : fn,
                            lName : ln,
                            email : em,
                            pwd : pw
                        }

                        console.log(newUser);
                        usersList.push(newUser);
                        localStorageUsersList(usersList);

                    }

                }   

            }
        }

    }//end addUser()

    //Query users list
    var btnQueryLS = document.getElementById("btnQLS");
    btnQueryLS.addEventListener("click", getUsersList);
    btnQueryLS.addEventListener("click", getTDL);
    
    function getUsersList(){

        var storedList = localStorage.getItem('localUsersList');

        if(storedList === null){
            usersList = [];
        }else{
            usersList = JSON.parse(storedList);
        }
        console.log(usersList);
    }

    function getTDL(){

        var storedList2 = localStorage.getItem('localToDoList');

        if(storedList2 === null){
            localToDoLists = [];
        }else{
            localToDoLists = JSON.parse(storedList2);
        }
        console.log(localToDoLists);

    }

    //CLear Local Storage
    var btnCLRLS = document.getElementById("btnCLR");
    btnCLRLS.addEventListener("click", clearLocalStorageData);

    function clearLocalStorageData(){
        localStorage.clear();
    }

}//END signUp()


function logIn(){

    divContainer.removeChild(btnSignUp);
    divContainer.removeChild(btnLogIn);

    const myForm = `
        <form id="myForm">
            <input type="email" id="email" placeholder="email" style="display: block;"><br>
            <input type="password" id="password" placeholder="password" style="display: block;"><br>
            <div id="divBtnSubmitLogIn">
                <button type="button" id="btnSubmitLI">SUBMIT</button>
            </div>
            <div id="divBtnHome">
                <button type="button" id="btnBack">HOME</button>
            </div>
        </form> `;
    
    divContainer.innerHTML = myForm;

    const myFormJS = document.getElementById("myForm");
    console.log(myFormJS);

    const buttons = divContainer.querySelectorAll("button");
    var btnSubmitLI = buttons[0];
    var btnHome = buttons[1];

    btnSubmitLI.addEventListener("click", matchUser);
    btnHome.addEventListener("click", removingContent);

    function removingContent(){
        divContainer.removeChild(myFormJS);
        landingPage();
    }

    function matchUser(){
        
        let counter = 0;
        let users = JSON.parse(localStorage.getItem('localUsersList'));
        
        em = document.getElementById("email").value;
        passw = document.getElementById("password").value;
        
        emailGlobal = em;
        
        if(users){
            for(let user of users){
                if (em === user.email && passw === user.pwd){
                    counter+=1;
                }
            }
        }

        if(counter === 0){
            swal({
                text: `please verify your credentials!`,
                icon: `error`,
            });
            document.getElementById("email").value = ``;
            document.getElementById("password").value = ``;
        }else{
            swal({
                title: `Welcome back!`,
                icon: "success",
            });
            document.getElementById("email").value = ``;
            document.getElementById("password").value = ``;
            divContainer.removeChild(myFormJS);
            dashBoard();
        }        

    }
    
}//END LogIn

/** DASHBOARD */
function dashBoard(){

    const divloacsett = `
        <div id="divLogOutAccSett">
            <button type="button" id="btnLogOut">Log Out</button>
            <button type="button" id="btnAccountSettings">Account Settings</button>
        </div
    `;
    
    divContainer.innerHTML += divloacsett;

    const divdashbrd = `
        <div id="divDashBoard">
            <div id="divbtnNewList">
                <button type="button" id="btnNewList">NEW</button>
            </div>
            <div id="divToDoListIndex">
                <ul id="ulToDoList"></ul>
            </div>
        </div>
    `;

    divContainer.innerHTML += divdashbrd;
    var divDashBoard = document.getElementById("divDashBoard");
    const btnNewListInside = divDashBoard.querySelectorAll("button");
    btnNewList = btnNewListInside[0];

    btnNewList.addEventListener("click", addNewList);
    btnLogOut.addEventListener("click", removeElements);
    btnAccountSettings.addEventListener("click", accountSettings);

    const divbtnInside = divDashBoard.querySelectorAll("div");
    divbtnNewList = divbtnInside[0];

    divToDoListIndex = divbtnInside[1];

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);

    //go to listView when click on a list
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        thisIsIt = ev.target.innerText;
        listView(thisIsIt);
    }
    }, false);

    // Create a new element
    function addNewList() {

        let newTDL = "";

        while(newTDL === ""){
            newTDL = prompt(`Please give the TDL a name`);
        }

        if(newTDL === null){
            return;
        }

        inputValue = newTDL;
        
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        if (inputValue === '') {
            alert(`You must write something!`);
        }else if(inputValue === null){
            return;
        }
        else{
            var index1 = verifyListUniqueName(inputValue, emailGlobal);
            if(index1 === -1){
                document.getElementById("ulToDoList").appendChild(li);
                thisIsIt = inputValue;
                listView(thisIsIt);
            }else{
                swal({
                    text: `That name already exists for another to-do-list!`,
                    icon: `error`,
                })
            }
        }
    
        for (let i=0; i<close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            ulToDoList.removeChild(div);
            }
        }

    }//End newElement()

    loadAndAppendElements();

    function loadAndAppendElements(){

        var storedList = localStorage.getItem('localToDoList');
        
        if(storedList === null){
            usersList = [];
        }else{
            usersList = JSON.parse(storedList);
        }

        var userOwnLists = usersList.filter(el => el.ownerEmail === emailGlobal);

        for (let i=0; i< userOwnLists.length; i++){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(userOwnLists[i].listName));
            ulToDoList.appendChild(li);
        }
    }

    var myNodelist2 = document.getElementsByTagName("LI");

    function listView(liText){

        const divdb = `
            <div id="divButtons">
                <button id="btnSaveList" type="button">SAVE LIST</button>
                <button id="btnRenameList" type="button">RENAME LIST</button>
                <button id="btnAddTask" type="button">ADD TASK</button>
                <button id="btnBackToListIndex" type="button">BACK TO INDEX</button>
                <button id="btnDeleteList" type="button">DELETE LIST</button>
            </div>
        `;

        divDashBoard.innerHTML = divdb;

        const divlv = `
            <div id="divListView">
                <ul id="ulTaskList"></ul>
            </div>
        `;

        divDashBoard.innerHTML += divlv;

        // Get the parent DIV, add click listener...
        document.getElementById("divButtons").addEventListener("click",function(e) {
            if(e.target.id === "btnSaveList") {
                saveList();
            }else if(e.target.id === "btnRenameList"){
                renameList();
            }else if(e.target.id === "btnAddTask"){
                newTaskList();
            }else if(e.target.id === "btnBackToListIndex"){
                hideTaskListView();
            }else if(e.target.id === "btnDeleteList"){
                deleteList();
            }
        });

        loadAndAppendTasks(liText);

        function loadAndAppendTasks(liDescr){

            var storedList = localStorage.getItem('localToDoList');
        
            if(storedList === null){
                localToDoLists = [];
            }else{
                localToDoLists = JSON.parse(storedList);
            }

            var specificListContent = localToDoLists.filter(el => el.ownerEmail === emailGlobal && el.listName === liDescr);
            var objLeng = Object.entries(specificListContent).length;

            if(objLeng !== 0){
                
                let result = specificListContent.map(a => a.tasksSummary);
                let content = result[0];

                let tm = specificListContent.map(t => t.tasksMarked);
                let tmContent = tm[0];
                
                for (let i=0; i < content.length; i++){
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(content[i]));
                    if(tmContent[i]===true){
                        li.classList.add('checked');
                    }else{
                        li.classList.remove('checked');
                    }
                    ulTaskList.appendChild(li);
                }

            }
            
        }//END loadAndAppendTasks()
        
        function hideTaskListView(){
            while (divContainer.firstChild) {
                divContainer.removeChild(divContainer.firstChild);
            }
            dashBoard();
        }

        // Create a "close" button and append it to each list item
        //var myNodelist2 = document.getElementsByTagName("LI");
        for (let i = 0; i < myNodelist2.length; i++) {
            var span2 = document.createElement("SPAN");
            var txt2 = document.createTextNode("\u00D7");
            span2.className = "close";
            span2.appendChild(txt2);
            myNodelist2[i].appendChild(span2);
        }

        // Click on a close button to hide the current list item
        var close2 = document.getElementsByClassName("close");
        for (let i = 0; i < close2.length; i++) {
            close2[i].onclick = function() {
            var div2 = this.parentElement;
            ulTaskList.removeChild(div2);
            }
        }

        // Add a "checked" symbol when clicking on a list item
        var list2 = document.querySelector('ul');
        list2.addEventListener('click', function(ev2) {
        if (ev2.target.tagName === 'LI') {
            ev2.target.classList.toggle('checked');
        }
        }, false);

        // Create a new task list
        function newTaskList() {
            
            var newTaskList = prompt(`Please enter a task list...`);
            var litl = document.createElement("li");
            var inputValueTL = newTaskList;
            var tl = document.createTextNode(inputValueTL);
            litl.appendChild(tl);

            if (inputValueTL === '') {
                alert(`You must write something!`);
            }else if(inputValueTL === null){
                return;
            }
            else{
                document.getElementById("ulTaskList").appendChild(litl);
            }
            
            var spantl = document.createElement("SPAN");
            var txttl = document.createTextNode("\u00D7");
            spantl.className = "close";
            spantl.appendChild(txttl);
            litl.appendChild(spantl);
        
            for (let i=0; i<close2.length; i++) {
                close2[i].onclick = function() {
                var div2 = this.parentElement;
                ulTaskList.removeChild(div2);
                }
            }

        }//End newTaskList()

        function saveList(){
            
            let isMarkedOrNot = [];
            let tasksList = [];

            for(let i=0; i<myNodelist2.length; i++){        
                var listDesc = myNodelist2[i].firstChild.textContent;
                tasksList.push(listDesc);
                isMarkedOrNot.push(myNodelist2[i].classList.contains('checked'));
            }

            saveListIndex(thisIsIt, emailGlobal, tasksList, isMarkedOrNot);

            function saveListIndex(iv, emG, tskl, tskM){
            
                var newList = {
                    listName : iv,
                    ownerEmail :emG,
                    tasksSummary: tskl,
                    tasksMarked: tskM
                }

                var listNameIndex = verifyListUniqueName(iv, emG);

                if (listNameIndex === -1){
                    localToDoLists.push(newList);    
                }else{
                    localToDoLists[listNameIndex] = newList;
                }
                console.log(localToDoLists);
                localStorageToDoList(localToDoLists);
            }

        }//END saveList()

        function renameList(){

            let idxOriginal = verifyListUniqueName(thisIsIt, emailGlobal);

            if(idxOriginal === -1){
                swal({
                    title: `Please save the TDL first`,
                    text: `you haven't saved the list yet. You cannot rename it at this time!`,
                    icon: `info`,
                });
                return;
            }

            let newTDLname = ``;

            while(newTDLname === ``){
                newTDLname = prompt(`Please enter a new TDL name`);
            }

            if(newTDLname === null){
                return;
            }

            inputValue2 = newTDLname;

            let indexC = verifyListUniqueName(inputValue2, emailGlobal);

            if(indexC === -1){
                localToDoLists[idxOriginal].listName = inputValue2;
                console.log(localToDoLists);
                localStorageToDoList(localToDoLists);
                inputValue = inputValue2;
            }else{
                swal({
                    text: `That name already exists for another to-do-list!`,
                    icon: `error`,
                })
            }

        }//END renameList()

        function deleteList(){

            let deleteList = confirm(`are you sure???`);

            if(deleteList){
                //verify if the list has been already saved
                let idxOriginal = verifyListUniqueName(thisIsIt, emailGlobal);

                if(idxOriginal === -1){
                    swal({
                        title: `Please save the TDL first`,
                        text: `you haven't saved the list yet. You cannot delete it at this time!`,
                        icon: `info`,
                    });
                    return;
                }else{ //Proceed to delete
                    for( var i = 0; i < localToDoLists.length; i++){ 
    
                        if ( localToDoLists[i].ownerEmail === emailGlobal && localToDoLists[i].listName === thisIsIt ) { 
                    
                            localToDoLists.splice(i, 1);
                            i--;
                        }
                    
                    }
                    localStorageToDoList2(localToDoLists);
                    hideTaskListView();
                }
            }else{//The user didn't want to delete the list
                return false;
            }

        }//END deleteList()

    }//END listView()

    function removeElements(){
        
        var message = confirm(`Are you sure to log out?`);
        
        if(message){

            removeAllChildNodes(divContainer);    
            
            function removeAllChildNodes(element) {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
            }
            landingPage();

        }else{
            
            return;
        }
        
    }

    function accountSettings(){

        divContainer.removeChild(divDashBoard);

        const myFormAcSet = ` 
        
        <form id="myForm2">
            <input type="text" placeholder="New First Name" id="txtFirstName2" style="display: block;"><br>
            <input type="text" placeholder="New Last Name" id="txtLastName2" style="display: block;"><br>
            <input type="email" id="email2" placeholder="New email" required="" style="display: block;"><br>
            <input type="password" id="password2" placeholder="New password" required="" style="display: block;"><br>
            <div id="divBtnSubmitModify">
                <button type="button" id="btnSubmitModify">MODIFY</button>
                <button type="button" id="btnClearEdit">CLEAR</button>
                <button id="btnCancel">CANCEL</button>
            </div>
        </form>
        
        `;

        divContainer.innerHTML += myFormAcSet;

        var btnSubmitModify = document.getElementById("btnSubmitModify");
        var btnClearEdit = document.getElementById("btnClearEdit");
        var btnCancel = document.getElementById("btnCancel");

        btnSubmitModify.addEventListener("click", askForNewData);
        btnCancel.addEventListener("click", cancelEdition);
        btnClearEdit.addEventListener("click", clearEdition);
        btnLogOut.addEventListener("click", removeElements);
        
        function clearEdition(){
            document.getElementById("txtFirstName2").value = "";
            document.getElementById("txtLastName2").value = "";
            document.getElementById("email2").value = "";
            document.getElementById("password2").value = "";
        }

        function cancelEdition(){
            divContainer.removeChild(myForm2);
            divContainer.appendChild(divDashBoard);
            btnAccountSettings.addEventListener("click", accountSettings);
            btnLogOut.addEventListener("click", removeElements);
        }

        function askForNewData(){

            let userIndexMod;
            let currentEmail = "";

            btnAccountSettings.removeEventListener("click", askForNewData);
            
            if((document.getElementById("txtFirstName2").value === "" || document.getElementById("txtLastName2").value === "" || document.getElementById("email2").value === "" || document.getElementById("password2").value === "")){
                
                swal({
                    text: "All the fields are required",
                    icon: "error",
                });

            }else{
                
                let fn = document.getElementById("txtFirstName2").value;
                let ln = document.getElementById("txtLastName2").value;        
                let em = document.getElementById("email2").value;
                let passw = document.getElementById("password2").value;

                var storedList = localStorage.getItem('localUsersList');

                if(storedList === null){
                    usersList = [];
                }else{
                    usersList = JSON.parse(storedList);
                }

                currentEmail = prompt(`Please enter your current email`);
                let indexCurrentEmail = checkingEmail(currentEmail);

                if(currentEmail !== null){

                    if(currentEmail !== ""){

                        userIndexMod = checkingEmail(em);
                        
                        if(indexCurrentEmail !== -1){

                            if(userIndexMod === -1){
                                                    
                                usersList[indexCurrentEmail].fName = fn;
                                usersList[indexCurrentEmail].lName = ln;  
                                usersList[indexCurrentEmail].email = em;
                                usersList[indexCurrentEmail].pwd = passw;
                                emailGlobal = em;
                                localStorageUsersList2(usersList);

                                //update ownerEmail in localToDoLists if it was changed.
                                for(let x of localToDoLists){
                                    if(x.ownerEmail === currentEmail){
                                        x.ownerEmail = em;
                                    }
                                }

                                localStorageToDoList(localToDoLists);

                            }else{

                                if(em === currentEmail){
                                    
                                    usersList[indexCurrentEmail].fName = fn;
                                    usersList[indexCurrentEmail].lName = ln;  
                                    usersList[indexCurrentEmail].email = em;
                                    emailGlobal = em;
                                    usersList[indexCurrentEmail].pwd = passw;
                                    localStorageUsersList2(usersList);

                                }else{

                                    swal({
                                        text: `This email already exists!`,
                                        icon: `error`,
                                    });
    
                                }
                                
                            }

                        }else{

                            swal({
                                text: `There was an error!`,
                                icon: `error`,
                            });

                        }                        
                        
                    }else{

                        swal({
                            text: `There was an error!`,
                            icon: `error`,
                        });

                    }
                    
                }else{

                    swal({
                        text: `There was an error!`,
                        icon: `error`,
                    });               
                
                }//end if currentEmail is null

            }//END validation if...else

        }//END askForNewData()

    }//END accountSettings()   
    
}//END dashboard()


