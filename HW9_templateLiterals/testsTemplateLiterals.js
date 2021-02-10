const oneDiv = 
`
<div id="oneDiv"> </div>
`;

const oneParagraph = 
`
<p id="myParag">I am PAULO ENRIQUE </p>
`;

document.body.innerHTML = oneDiv;
document.body.innerHTML += oneParagraph;

const myFirstDiv = document.getElementById("oneDiv");
const myFirstParag = document.getElementById("myParag");

myFirstDiv.appendChild(myFirstParag);

const myForm = `<form id="myForm" action="/action_page.php">
                    <label for="fname">First name:</label><br>
                    <input type="text" id="fname" name="fname" value="John"><br>
                    <label for="lname">Last name:</label><br>
                    <input type="text" id="lname" name="lname" value="Doe"><br><br>
                    <input type="submit" value="Submit">
                </form>`;

document.body.innerHTML += myForm;

const myFormJS = document.getElementById("myForm");
myFormJS.appendChild(myFirstDiv);

console.log(myFormJS);







