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
</form>`;

document.body.innerHTML = myForm;

const myFormJS = document.getElementById("myForm");
const email = myFormJS.getElementsByTagName("button");

console.log(myFormJS);
console.log(email);






