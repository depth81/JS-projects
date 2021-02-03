window.addEventListener("load", landingPage);

const divContainer = document.getElementById("container");

var usersList = [];
var localToDoLists = [];
var passwordGlobal = "";
var inputValue = "";
var thisIsIt = "";

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

    btnSignUp = document.createElement("button");
    btnSignUp.innerHTML = "Sign Up";
    btnSignUp.id = "btnSignUp";
    btnSignUp.type = "button";
    
    btnLogIn = document.createElement("button");
    btnLogIn.innerHTML = "Log In";
    btnLogIn.id = "btnLogIn";
    btnLogIn.type = "button";
    
    divContainer.appendChild(btnSignUp);
    divContainer.appendChild(btnLogIn);

    btnSignUp.addEventListener("click", signUp);
    btnLogIn.addEventListener("click", logIn);

}//END LandingPage()

function signUp(){
    
    divContainer.removeChild(btnSignUp);
    divContainer.removeChild(btnLogIn);

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");
    const br4 = document.createElement("br");

    let myForm = document.createElement("form");
    myForm.id = "myForm";

    let txtFirstName = document.createElement("input");
    txtFirstName.setAttribute("type", "text");
    txtFirstName.placeholder = "First Name";
    txtFirstName.style.display = "block";
    txtFirstName.id = "txtFirstName";
    myForm.appendChild(txtFirstName);
    myForm.appendChild(br1);

    let txtLastName = document.createElement("input");
    txtLastName.setAttribute("type", "text");
    txtLastName.placeholder = "Last Name";
    txtLastName.style.display = "block";
    txtLastName.id = "txtLastName";
    myForm.appendChild(txtLastName);
    myForm.appendChild(br2);

    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.id = "email";
    email.style.display = "block";
    email.placeholder = "email";
    email.required = true;
    myForm.appendChild(email);
    myForm.appendChild(br3);

    let passw = document.createElement("input");
    passw.setAttribute("type", "password");
    passw.id = "password";
    passw.style.display = "block";
    passw.placeholder = "password";
    passw.required = true;
    myForm.appendChild(passw);
    myForm.appendChild(br4);

    const lblAgree = document.createElement("label");
    lblAgree.innerText = "I agree to the Terms of Use";
    lblAgree.htmlFor = "chkAgree";
    myForm.appendChild(lblAgree);

    let chkAgree = document.createElement("input");
    chkAgree.setAttribute("type", "checkbox");
    chkAgree.id = "chkAgree";

    const divChkBox = document.createElement("div");
    divChkBox.id = "divChkBox";

    const divBtnSubmitSignUp = document.createElement("div");
    divBtnSubmitSignUp.id = "divBtnSubmitSignUp";

    let btnSubmitSU = document.createElement("button");
    btnSubmitSU.type = "button";
    btnSubmitSU.id = "btnSubmitSU";
    btnSubmitSU.innerText = "SUBMIT";

    /* Creating provisional buttons to query and clear the local storage */
    let btnQLS = document.createElement("button");
    btnQLS.type = "button";
    btnQLS.id = "btnQLS";
    btnQLS.innerText = "Query LS";

    let btnCLR = document.createElement("button");
    btnCLR.type = "button";
    btnCLR.id = "btnCLR";
    btnCLR.innerText = "Clear LS";

    let divQYCLR = document.createElement("div");
    divQYCLR.id = "divQYCLR";
    /** */

    const divBtnHome = document.createElement("div");
    divBtnHome.id = "divBtnHome";

    let btnHome = document.createElement("button");
    btnHome.type = "button";
    btnHome.id = "btnHome";
    btnHome.innerText = "HOME";

    let btnCLRSU = document.createElement("button");
    btnCLRSU.type = "button";
    btnCLRSU.id = "btnCLRSU";
    btnCLRSU.innerText = "CLEAR";
    
    divChkBox.appendChild(chkAgree);  
    divChkBox.appendChild(lblAgree);
    myForm.appendChild(divChkBox);
    divBtnHome.appendChild(btnHome);
    
    divBtnSubmitSignUp.appendChild(btnSubmitSU);
    divBtnSubmitSignUp.appendChild(btnCLRSU);
    myForm.appendChild(divBtnSubmitSignUp);
    myForm.appendChild(divBtnHome);
    
    //provisional buttons to query and clear the localStorage object
    divQYCLR.appendChild(btnQLS);
    divQYCLR.appendChild(btnCLR);
    myForm.appendChild(divQYCLR); 
    /** */

    divContainer.appendChild(myForm);

    btnSubmitSU.addEventListener("click", addUser);
    btnHome.addEventListener("click", removingElementsSUHome);
    btnCLRSU.addEventListener("click", clearSignUpUserData);


    function removingElementsSUHome(){
        divContainer.removeChild(myForm);
        landingPage();
    }

    function clearSignUpUserData(){
        txtFirstName.value = "";
        txtLastName.value = "";
        email.value = "";
        passw.value = "";
    }

    function addUser(){
        
        if(!chkAgree.checked){

            swal({
                text: "You must accept the terms of use!",
                icon: "error",
            });
        
        }else{

            if(txtFirstName.value === "" || txtLastName.value === "" || email.value === "" || passw.value === ""){

                swal({
                    text: "All fields are mandatory",
                    icon: "error",
                });
        
            }else{

                const fn = txtFirstName.value;
                const ln = txtLastName.value;
                const em = email.value;
                const pw = passw.value;
                
                emailGlobal = email.value;

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

    let myForm = document.createElement("form");
    myForm.id = "myForm";

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.id = "email";
    email.style.display = "block";
    email.placeholder = "email";
    myForm.appendChild(email);
    myForm.appendChild(br1);

    let passw = document.createElement("input");
    passw.setAttribute("type", "password");
    passw.id = "password";
    passw.style.display = "block";
    passw.placeholder = "password";
    myForm.appendChild(passw);
    myForm.appendChild(br2);

    const divBtnSubmitLogIn = document.createElement("div");
    divBtnSubmitLogIn.id = "divBtnSubmitLogIn";

    let btnSubmitLI = document.createElement("button");
    btnSubmitLI.type = "button";
    btnSubmitLI.id = "btnSubmitLI";
    btnSubmitLI.innerText = "SUBMIT";

    const divBtnHome = document.createElement("div");
    divBtnHome.id = "divBtnHome";

    let btnHome = document.createElement("button");
    btnHome.type = "button";
    btnHome.id = "btnBack";
    btnHome.innerText = "HOME";

    divBtnSubmitLogIn.appendChild(btnSubmitLI);
    divBtnHome.appendChild(btnHome);
    myForm.appendChild(divBtnSubmitLogIn);
    myForm.appendChild(divBtnHome);
    divContainer.appendChild(myForm);

    btnSubmitLI.addEventListener("click", matchUser);
    btnHome.addEventListener("click", removingContent);

    function removingContent(){
        divContainer.removeChild(myForm);
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
                text: "please verify your credentials!",
                icon: "error",
            });
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }else{
            swal({
                title: "Welcome back!",
                icon: "success",
            });
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            divContainer.removeChild(myForm);
            dashBoard();
        }        

    }
    
}//END LogIn

/** DASHBOARD */
function dashBoard(){

    let divLogOutAccSett = document.createElement("div");
    divLogOutAccSett.id = "divLogOutAccSett";

    let btnLogOut = document.createElement("button");
    btnLogOut.type = "button";
    btnLogOut.id = "btnLogOut";
    btnLogOut.innerText = "Log Out";

    let btnAccountSettings = document.createElement("button");
    btnAccountSettings.type = "button";
    btnAccountSettings.id = "btnAccountSettings";
    btnAccountSettings.innerText = "Account Settings";

    let divDashBoard = document.createElement("div");
    divDashBoard.id = "divDashBoard";

    let btnNewList = document.createElement("button");
    btnNewList.type = "button";
    btnNewList.id = "btnNewList";
    btnNewList.innerText = "NEW";

    let divbtnNewList = document.createElement("div");
    divbtnNewList.id = "divbtnNewList";

    divbtnNewList.appendChild(btnNewList);
    divDashBoard.appendChild(divbtnNewList);

    divLogOutAccSett.appendChild(btnLogOut);
    divLogOutAccSett.appendChild(btnAccountSettings);
    
    divContainer.appendChild(divLogOutAccSett);
    divContainer.appendChild(divDashBoard);

    btnLogOut.addEventListener("click", removeElements);
    btnAccountSettings.addEventListener("click", accountSettings);

    btnNewList.addEventListener("click", newElement);

    let divToDoListIndex = document.createElement("div");
    divToDoListIndex.id = "divToDoListIndex";

    let ulToDoList = document.createElement("ul");
    ulToDoList.id = "ulToDoList";

    divToDoListIndex.appendChild(ulToDoList);
    divDashBoard.appendChild(divToDoListIndex);

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
    function newElement() {

        let newTDL = "";

        while(newTDL === ""){
            newTDL = prompt("Please give the TDL a name");
        }

        if(newTDL === null){
            return;
        }

        inputValue = newTDL;
        
        var li = document.createElement("li");
        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        if (inputValue === '') {
            alert("You must write something!");
        }else if(inputValue === null){
            return;
        }
        else{
            var index1 = verifyListUniqueName(inputValue, emailGlobal);
            if(index1 === -1){
                document.getElementById("ulToDoList").appendChild(li);
            }else{
                swal({
                    text: "That name already exists for another to-do-list!",
                    icon: "error",
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
    
        divDashBoard.removeChild(divbtnNewList);
        divDashBoard.removeChild(divToDoListIndex);

        divbtnNewList.style.display = "none";
        divToDoListIndex.style.display = "none";

        let divButtons = document.createElement("div");
        divButtons.id = "divButtons";

        let btnSaveList = document.createElement("button");
        btnSaveList.type ="button";
        btnSaveList.id = "btnSaveList";
        btnSaveList.innerText = "SAVE LIST";

        let btnBackToListIndex = document.createElement("button");
        btnBackToListIndex.type ="button";
        btnBackToListIndex.id = "btnBackToListIndex";
        btnBackToListIndex.innerText = "BACK TO INDEX";

        let btnRenameList = document.createElement("button");
        btnRenameList.type = "button";
        btnRenameList.id = "btnRenameList";
        btnRenameList.innerText = "RENAME LIST";

        let btnAddTask = document.createElement("button");
        btnAddTask.type = "button";
        btnAddTask.id = "btnAddTask";
        btnAddTask.innerText = "ADD TASK";

        let btnDeleteList = document.createElement("button");
        btnDeleteList.type = "button";
        btnDeleteList.id = "btnDeleteList";
        btnDeleteList.innerText = "DELETE LIST";

        var divListView = document.createElement("div");
        divListView.id = "divListView";
        
        let ulTaskList = document.createElement("ul");
        ulTaskList.id = "ulTaskList";

        divButtons.appendChild(btnSaveList);
        divButtons.appendChild(btnRenameList);
        divButtons.appendChild(btnAddTask);
        divButtons.appendChild(btnBackToListIndex);
        divButtons.appendChild(btnDeleteList);
        divDashBoard.appendChild(divButtons);
        divListView.appendChild(ulTaskList);
        divDashBoard.appendChild(divListView);

        btnAddTask.addEventListener("click", newTaskList);
        btnBackToListIndex.addEventListener("click", hideTaskListView);
        btnSaveList.addEventListener("click", saveList);
        btnRenameList.addEventListener("click", renameList);
        btnDeleteList.addEventListener("click", deleteList);

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
                
                for (let i=0; i < content.length; i++){
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(content[i]));
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
            
            var newTaskList = prompt("Please enter a task list...");
            var litl = document.createElement("li");
            var inputValueTL = newTaskList;
            var tl = document.createTextNode(inputValueTL);
            litl.appendChild(tl);

            if (inputValueTL === '') {
                alert("You must write something!");
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

            let tasksList = [];

            for(let i=0; i<myNodelist2.length; i++){
                var listDesc = myNodelist2[i].firstChild.textContent;
                tasksList.push(listDesc);
            }

            saveListIndex(thisIsIt, emailGlobal, tasksList);

            function saveListIndex(iv, emG, tskl){
            
                var newList = {
                    listName : iv,
                    ownerEmail :emG,
                    tasksSummary: tskl
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
                    title: "Please save the TDL first",
                    text: "you haven't saved the list yet. You cannot rename it at this time!",
                    icon: "info",
                });
                return;
            }

            let newTDLname = "";

            while(newTDLname === ""){
                newTDLname = prompt("Please enter a new TDL name");
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
                    text: "That name already exists for another to-do-list!",
                    icon: "error",
                })
            }

        }//END renameList()

        function deleteList(){

            console.log(emailGlobal);
            console.log(thisIsIt);

            let deleteList = confirm("are you sure???");

            if(deleteList){
                //verify if the list has been already saved
                let idxOriginal = verifyListUniqueName(thisIsIt, emailGlobal);
                console.log(idxOriginal);

                if(idxOriginal === -1){
                    swal({
                        title: "Please save the TDL first",
                        text: "you haven't saved the list yet. You cannot delete it at this time!",
                        icon: "info",
                    });
                    return;
                }else{ //Proceed to delete
                    console.log(localToDoLists);
                    //localToDoLists = localToDoLists.filter(el => el.ownerEmail === emailGlobal && el.listName !== thisIsIt);
                    for( var i = 0; i < localToDoLists.length; i++){ 
    
                        if ( localToDoLists[i].ownerEmail === emailGlobal && localToDoLists[i].listName === thisIsIt ) { 
                    
                            localToDoLists.splice(i, 1);
                            i--;
                        }
                    
                    }
                    console.log(localToDoLists);
                    localStorageToDoList2(localToDoLists);
                    hideTaskListView();
                }
            }else{//The user didn't want to delete the list
                return false;
            }

        }//END deleteList()

    }//END listView()

    function removeElements(){
        
        var message = confirm("Are you sure to log out?");
        
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

        btnAccountSettings.removeEventListener("click", accountSettings);

        divDashBoard.style.display = "none";

        const br1 = document.createElement("br");
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");
        const br4 = document.createElement("br");

        let myForm2 = document.createElement("form");
        myForm2.id = "myForm2";

        let txtFirstName2 = document.createElement("input");
        txtFirstName2.setAttribute("type", "text");
        txtFirstName2.placeholder = "New First Name";
        txtFirstName2.style.display = "block";
        txtFirstName2.id = "txtFirstName2";
        myForm2.appendChild(txtFirstName2);
        myForm2.appendChild(br1);

        let txtLastName2 = document.createElement("input");
        txtLastName2.setAttribute("type", "text");
        txtLastName2.placeholder = "New Last Name";
        txtLastName2.style.display = "block";
        txtLastName2.id = "txtLastName2";
        myForm2.appendChild(txtLastName2);
        myForm2.appendChild(br2);

        let email2 = document.createElement("input");
        email2.setAttribute("type", "email");
        email2.id = "email2";
        email2.style.display = "block";
        email2.placeholder = "New email";
        email2.required = true;
        myForm2.appendChild(email2);
        myForm2.appendChild(br3);

        let passw2 = document.createElement("input");
        passw2.setAttribute("type", "password");
        passw2.id = "password2";
        passw2.style.display = "block";
        passw2.placeholder = "New password";
        passw2.required = true;
        myForm2.appendChild(passw2);
        myForm2.appendChild(br4);

        const divBtnSubmitModify = document.createElement("div");
        divBtnSubmitModify.id = "divBtnSubmitModify";

        let btnSubmitModify = document.createElement("button");
        btnSubmitModify.type = "button";
        btnSubmitModify.id = "btnSubmitModify";
        btnSubmitModify.innerText = "MODIFY";

        let btnCancel = document.createElement("button");
        btnCancel.type + "button";
        btnCancel.id = "btnCancel";
        btnCancel.innerText = "CANCEL";

        let btnClearEdit = document.createElement("button");
        btnClearEdit.type = "button";
        btnClearEdit.id = "btnClearEdit";
        btnClearEdit.innerText = "CLEAR";

        divBtnSubmitModify.appendChild(btnSubmitModify);
        divBtnSubmitModify.appendChild(btnClearEdit);
        divBtnSubmitModify.appendChild(btnCancel);
        myForm2.appendChild(divBtnSubmitModify);

        divContainer.insertBefore(myForm2, divDashBoard);

        btnSubmitModify.addEventListener("click", askForNewData);
        btnCancel.addEventListener("click", cancelEdition);
        btnClearEdit.addEventListener("click", clearEdition);

        function clearEdition(){
            document.getElementById("txtFirstName2").value = "";
            document.getElementById("txtLastName2").value = "";
            document.getElementById("email2").value = "";
            document.getElementById("password2").value = "";
        }

        function cancelEdition(){
            divContainer.removeChild(myForm2);
            divDashBoard.style.display =  "block";
            btnAccountSettings.addEventListener("click", accountSettings);
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

                currentEmail = prompt("Please enter your current email");
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

                                console.log(localToDoLists);
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
                                        text: "This email already exists!",
                                        icon: "error",
                                    });
    
                                }
                                
                            }

                        }else{

                            swal({
                                text: "There was an error!",
                                icon: "error",
                            });

                        }                        
                        
                    }else{

                        swal({
                            text: "There was an error!",
                            icon: "error",
                        });

                    }
                    
                }else{

                    swal({
                        text: "There was an error!",
                        icon: "error",
                    });               
                
                }//end if currentEmail is null

            }//END validation if...else

        }//END askForNewData()

    }//END accountSettings()   
    
}//END dashboard()


