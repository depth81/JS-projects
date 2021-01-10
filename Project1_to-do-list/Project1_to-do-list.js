window.addEventListener("load", landingPage);

const divContainer = document.getElementById("container");

let usersList = [];

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

}

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

    divChkBox.appendChild(chkAgree);
    divChkBox.appendChild(lblAgree);
    myForm.appendChild(divChkBox);
    divBtnSubmitSignUp.appendChild(btnSubmitSU);
    myForm.appendChild(divBtnSubmitSignUp);
    
    //provisional buttons to query and clear the localStorage object
    myForm.appendChild(btnQLS);
    myForm.appendChild(btnCLR);

    divContainer.appendChild(myForm);

    btnSubmitSU.addEventListener("click", addUser);

    function addUser(){
        
        if(!chkAgree.checked){
            
            alert("You must accept the terms and conditions!");
        
        }else{

            if(txtFirstName.value === "" || txtLastName.value === "" || email.value === "" || passw.value === ""){
        
                alert("All fields are mandatory");
        
            }else{

                const fn = txtFirstName.value;
                const ln = txtLastName.value;
                const em = email.value;
                const pw = passw.value;

                if(pw.length<3){
        
                    alert("at least 3 characters please");
        
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
        
        function localStorageUsersList(uList){
            localStorage.setItem('localUsersList',JSON.stringify(uList));
            txtFirstName.value = "";
            txtLastName.value = "";
            email.value = "";
            passw.value = "";
            chkAgree.checked = false;
            alert("successfully stored!");
            dashBoard();
        }


    }//end addUser()

    //Query users list
    var btnQueryLS = document.getElementById("btnQLS");
    btnQueryLS.addEventListener("click", getUsersList);

    function getUsersList(){

        var storedList = localStorage.getItem('localUsersList');
        console.log(storedList);

        if(storedList === null){
            usersList = [];
        }else{
            usersList = JSON.parse(storedList);
        }
        return usersList;
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

    divBtnSubmitLogIn.appendChild(btnSubmitLI);
    myForm.appendChild(divBtnSubmitLogIn);
    divContainer.appendChild(myForm);

    btnSubmitLI.addEventListener("click", matchUser);

    function matchUser(){
        
        let counter = 0;
        let users = JSON.parse(localStorage.getItem('localUsersList'));
        em = document.getElementById("email").value;
        passw = document.getElementById("password").value;
        
        for(let user of users){
            if (em === user.email && passw === user.pwd){
                counter+=1;
            }
        }

        if(counter === 0){
            alert("please verify your credentials...");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }else{
            alert("YOU ARE WELCOME!");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            dashBoard();
        }        

    }
    
}//END LogIn

/** DASHBOARD */
function dashBoard(){
    
    divContainer.removeChild(myForm);

    const br1 = document.createElement("br");

    let divLogOut = document.createElement("div");
    divLogOut.id = "divLogOut";

    let btnLogOut = document.createElement("button");
    btnLogOut.type = "button";
    btnLogOut.id = "btnLogOut";
    btnLogOut.innerText = "Log Out";

    let divAccountSettings = document.createElement("div");
    divAccountSettings.id = "divAccountSettings";

    let btnAccountSettings = document.createElement("button");
    btnAccountSettings.type = "button";
    btnAccountSettings.id = "btnAccountSettings";
    btnAccountSettings.innerText = "Account Settings";

    divLogOut.appendChild(btnLogOut);
    divAccountSettings.appendChild(br1);
    divAccountSettings.appendChild(btnAccountSettings);
    
    divContainer.appendChild(divLogOut);
    divContainer.appendChild(divAccountSettings);

    btnLogOut.addEventListener("click", removeElements);
    btnAccountSettings.addEventListener("click", accountSettings);

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
        btnSubmitModify.innerText = "Modify";

        divBtnSubmitModify.appendChild(btnSubmitModify);
        myForm2.appendChild(divBtnSubmitModify);
        divContainer.appendChild(myForm2);

        btnSubmitModify.addEventListener("click", askForNewData);

        function askForNewData(){

            btnAccountSettings.removeEventListener("click", askForNewData);           

            if((document.getElementById("txtFirstName2").value === "" || document.getElementById("txtLastName2").value === "" || document.getElementById("email2").value === "" || document.getElementById("password2").value === "")){
                
                alert("All the fields are required");

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

                let currentPWD = prompt("Enter your current password");

                for(let i=0; i<usersList.length; i++){
                    if(usersList[i].pwd === currentPWD){
                        usersList[i].fName = fn;
                        usersList[i].lName = ln;
                        usersList[i].email = em;
                        usersList[i].pwd = passw;
                    }
                }

                localStorageUsersList2(usersList);

                function localStorageUsersList2(uList){
                    localStorage.setItem('localUsersList',JSON.stringify(uList));
                    alert("successfully modified!");
                    txtFirstName2.value = "";
                    txtLastName2.value = "";
                    email2.value = "";
                    passw2.value = "";
                }

                console.log(currentPWD);
                console.log(usersList);

            }
        
        }//End askForNewData

    }//End accountSettings

}//END dashBoard


